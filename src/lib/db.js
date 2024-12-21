const {name , pass}=process.env
export const MONGO_URL ="mongodb+srv://"+name+":"+pass+"@cluster0.wvytg.mongodb.net/MIVS?retryWrites=true&w=majority&appName=Cluster0"
