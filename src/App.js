import styled from 'styled-components'
import { useEffect, useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import ContentArea from './components/ContentArea'
import todo from './lib/todo'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

import { useAuthState } from 'react-firebase-hooks/auth'

firebase.initializeApp({
    apiKey: "AIzaSyBuEHbo-5UBuW9iuZSpiI_3_3WEy1ABbGA",
    authDomain: "todo-2f58f.firebaseapp.com",
    projectId: "todo-2f58f",
    storageBucket: "todo-2f58f.appspot.com",
    messagingSenderId: "961112118816",
    appId: "1:961112118816:web:eb4f9225026274e2398e45",
    measurementId: "G-NQ3LGJD5MZ"
})

const auth = firebase.auth()
const data = firebase.firestore()

// Default string used to tutorialize the page. It goes from Base64 -> JSON -> converted to relevant JS objects.
const defaultSaveData = 'W3sidGV4dCI6IlRoaXMgaXMgdGhlIGZpcnN0IG9uZSIsInByaW9yaXR5IjowLCJjb21wbGV0ZSI6ZmFsc2V9LHsidGV4dCI6IkFub3RoZXIgb25lLCBidXQgaXQncyBjb21wbGV0ZSIsInByaW9yaXR5IjowLCJjb21wbGV0ZSI6dHJ1ZX0seyJ0ZXh0IjoiUmVkIGFsZXJ0LiBUaGlzIHRvZG8gaXMgdXJnZW50LiIsInByaW9yaXR5IjoyLCJjb21wbGV0ZSI6ZmFsc2V9LHsidGV4dCI6Ik9yYW5nZSBpcyBhIG5pY2UgbWVkaXVtIiwicHJpb3JpdHkiOjEsImNvbXBsZXRlIjpmYWxzZX0seyJ0ZXh0IjoiUmVtb3ZlIHRoaXMgdG9kbyBieSBjbGlja2luZyB0aGUgWCEiLCJwcmlvcml0eSI6MCwiY29tcGxldGUiOmZhbHNlfSx7InRleHQiOiJJZiB5b3UnZCBsaWtlLCB5b3UgY2FuIGFkZCBhbm90aGVyIHRvZG8gd2l0aCB0aGUgJysnIiwicHJpb3JpdHkiOjAsImNvbXBsZXRlIjpmYWxzZX0seyJ0ZXh0IjoiRG9uJ3QgZm9yZ2V0IHRvIGhpdCB0aGUgJ1NhdmUnIGJ1dHRvbiBhYm92ZSEiLCJwcmlvcml0eSI6MCwiY29tcGxldGUiOmZhbHNlfV0='

function App() {
	const [saveData, setSaveData] = useState([])

    const [user] = useAuthState(auth)

    const extractDataFromDoc = (data) => {
        const decodedDocJSON = JSON.parse(atob(data.data().saveData))
        const newSaveData = decodedDocJSON.map((extractedTodo) => {
            const newTodo = todo()
            newTodo.setText(extractedTodo.text)
            if (extractedTodo.complete) {
                newTodo.toggleComplete()
            }
            switch (extractedTodo.priority) {
                case 1:
                    newTodo.togglePriority()
                    break
                case 2:
                    newTodo.togglePriority()
                    newTodo.togglePriority()
                    break
                default:
                    // Priority is already set correctly
            }
            return newTodo
        })
        setSaveData(newSaveData)
    }

    useEffect(() => {
        const setData = async () => {
            if (user != null) {
                const dataCheck = await data.collection('userData').doc(user.uid).get()
                if (dataCheck.exists === false) {
                    await data.collection('userData').doc(user.uid).set({saveData: defaultSaveData}, {merge: true})
                    const newEntry = await data.collection('userData').doc(user.uid).get()
                    extractDataFromDoc(newEntry)
                } else {
                    extractDataFromDoc(dataCheck)
                }
            } else {
                setSaveData([])
            }
        }
        setData()
    }, [user])

	const logIn = () => {
		signInWithGoogle()
	}

    const signInWithGoogle = () => {
    	const provider = new firebase.auth.GoogleAuthProvider()
    	auth.signInWithPopup(provider)
    }

	const addTodo = (newTodo) => {
        setSaveData([...saveData, newTodo])
	}

    const editTodo = (field, id, value = null) => {
        let dataCopy = [ ...saveData ]
        switch (field) {
            case 'text':
                dataCopy[id].setText(value)
                break
            case 'priority':
                dataCopy[id].togglePriority()
                break
            default:
                dataCopy[id].toggleComplete()
        }
        setSaveData(dataCopy)
    }

    const removeTodo = (id) => {
        let dataCopy = [ ...saveData ]
        dataCopy.splice(id, 1)
        setSaveData(dataCopy)
    }

    const saveAll = async () => {
        const extractedSaveData = saveData.map((todo) => {
            return {
                text: todo.getText(),
                priority: todo.getPriority(),
                complete: todo.getComplete()
            }
        })
        const jsonSaveData = JSON.stringify(extractedSaveData)
        const encodedJSON = btoa(jsonSaveData)
        await data.collection('userData').doc(user.uid).set({saveData: encodedJSON}, {merge: true})
    }

    return (
        <Wrapper>
            <Header auth={user} signIn={logIn} signOut={() => {auth.signOut()}} saveAllData={saveAll} />
            <ContentArea saveData={saveData} addTodo={addTodo} edit={editTodo} remove={removeTodo} auth={user} />
            <Footer count={saveData.length} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #4A0D67;
`

export default App;
