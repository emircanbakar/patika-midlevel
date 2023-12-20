import io from "socket.io-client"

let socket;

export const init = () => {
    console.log("connecting...")
    socket = io('http://localhost:3000', {
        transports: ["websocket"],
    })
    socket.on('connect', () => console.log("connected"))
}

export const sendMessage = (message) => {
    if (socket) socket.emit('new-message', message)
}

export const subsChat = (cb) => {
    if (!socket) return
    socket.on('message-list', (message) => {
        console.log("yeni mesaj var", message)
        cb(message)
    })
}

export const subsInitialMessages = (cb) => {
    if (!socket) return
    socket.on('message-list', (message) => {
        console.log("Initial", message)
        cb(message)
    })
}