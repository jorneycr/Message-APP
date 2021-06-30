#Run the app
You need the database call 'message-app' also you can change the name on app.module.ts
>npm run start



#How to consume the app.

##Post
http://localhost:3000/mensajes

{"nick":"Dog","mensaje":"Hello from NestJS"}

##Get
http://localhost:3000/mensajes

##Put
http://localhost:3000/mensajes/1

##Delete
http://localhost:3000/mensajes/1
