const fs = require('fs');
const request = require('supertest');
const express = require('express');
const { Image, Comment } = require('../src/models/index');
const config = require('../src/server/config');
const app = config(express());
require("../src/database");

const rutaOrigen = 'test/test.jpg';
const rutaDestino = 'src/public/upload/test.jpg';

const contenidoImagen = fs.readFileSync(rutaOrigen);
fs.writeFileSync(rutaDestino, contenidoImagen);
/*    
const newImage = new Image({
    title: "Test",
    filename: "test.jpg",
    description: "Test"
});*/
describe('Funciones en Imagenes',() => {
    //newImage.save();
    const imagetest = Image.findOne({
        filename: "test.jpg" ,
      });
    console.log(imagetest)
    describe('Verificación de Imagen', () => {
        var likes = imagetest.likes;
        console.log(likes)

        test('Verificación de like', async () => {
            const response = await request(app).post('/images/test.jpg/like');
            likes+=1;
            //console.log(response);
            expect(response.statusCode).toBe(200);
            console.log(likes);
        });
        test('Sobrecarga de likes', async () => {
            for(let i=0; i<100; i++){
                await request(app).post('/images/test.jpg/like');
                likes+=1;
            }
            expect(imagetest.likes).toBe(likes);
        });
    });
    /*describe('Verificación de Comentario', () => {
        let commentsNumber = image.comments;
        test('Verificación de comentario', async () => {
            const response = await request(app).post('/images/test/comment');
            commentsNumber++;
            expect(response.statusCode).toBe(200);
        });
        test('Sobrecarga de comentarios', async () => {
            for(let i=0; i<100; i++){
                request(app).post('/images/test/comment');
                commentsNumber++;
            }
            expect(image.comments).toBe(commentsNumber);
        });
    });*/
    imagetest.deleteOne();
});