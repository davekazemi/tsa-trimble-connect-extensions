import { useState, useEffect } from 'react'
import './App.css'

interface MenuCommand {
  command: string
}

export default function App() {
  const [lastCommand, setLastCommand] = useState<string>('None')

  useEffect(() => {
    // Listen for messages from Trimble Connect
    const handleMessage = (event: MessageEvent) => {
      console.log('Received message:', event.data)
      
      if (event.data && event.data.command) {
        setLastCommand(event.data.command)
        handleMenuCommand(event.data.command)
      }
    }

    window.addEventListener('message', handleMessage)

    // Notify parent that extension is ready
    if (window.parent) {
      window.parent.postMessage({
        type: 'extension-ready',
        extensionId: 'hello-world-react-extension'
      }, '*')

      // Register menu
      window.parent.postMessage({
        type: 'register-menu',
        menu: {
          title: "Quadri shared Model",
          icon: "https://tsa-trimble-connect-extensions-61bczczbz.vercel.app/HelloWorld-React/q.svg",
          command: "QUADRI_TOP_MENU",
          subMenus: [
            {
              title: "Quadri shared Modelsubmenu1",
              icon: "https://tsa-trimble-connect-extensions-61bczczbz.vercel.app/HelloWorld-React/q1.svg",
              command: "QUADRI_SUB_MENU1"
            },
            {
              title: "Quadri shared Model submenu2",
              icon: "https://tsa-trimble-connect-extensions-61bczczbz.vercel.app/HelloWorld-React/q2.svg",
              command: "QUADRI_SUB_MENU2"
            }
          ]
        }
      }, '*')
    }

    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const handleMenuCommand = (command: string) => {
    console.log('Menu command received:', command)
    
    switch(command) {
      case 'QUADRI_TOP_MENU':
        console.log('Top menu clicked')
        break
      case 'QUADRI_SUB_MENU1':
        console.log('Submenu 1 clicked')
        break
      case 'QUADRI_SUB_MENU2':
        console.log('Submenu 2 clicked')
        break
      default:
        console.log('Unknown command:', command)
    }
  }

  return (
    <div className="container">
      <h1>Hello World React</h1>
      <div className="info">
        <p>This is a minimal React + TypeScript Trimble Connect extension.</p>
        <p>Last command: <strong>{lastCommand}</strong></p>
      </div>
    </div>
  )
}

