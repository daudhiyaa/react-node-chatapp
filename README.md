# React-Node-ChatApp

This project is using React for frontend, Node JS (Express) for backend, & [Chat Engine](https://chatengine.io/) for chat server.

## Prerequisites

1. `Node.js` & `npm` installed on your machine
2. `pnpm` installed on your machine (`npm i -g pnpm`)
3. `Project ID` & `Private Key` from [Chat Engine](https://chatengine.io/)

## How To Run

1. Clone the repository

   ```sh
   git clone https://github.com/daudhiyaa/react-node-chatapp.git
   ```

2. Replace the `Private-Key` & `Project ID` with your own

   - Line 9 in `frontend\src\pages\ChatsPage.jsx`
   - Line 7 in `frontend\src\pages\PrettyChatsPage.jsx`
   - Line 16 in `backend\index.js`

3. Start the server

   ```sh
   cd backend
   pnpm install
   pnpm start
   ```

4. Run the app

   ```sh
   cd frontend
   pnpm install
   pnpm run dev
   ```

### NB

Video to follow: [YouTube Tutorial](https://www.youtube.com/watch?v=Fzv-rgwcFKk)

Blog post to follow: [Blog Chat Engine](https://blog.chatengine.io/fullstack-chat/nodejs-reactjs)
