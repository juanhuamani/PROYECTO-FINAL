const fs = require('fs-extra');
const request = require('supertest');
const express = require('express');
const { Image, Comment } = require('../src/models/index');
const config = require('../src/server/config');
const app = config(express());
require("../src/database");

const rutaOrigen = 'test/test.jpg';
const rutaDestino = 'src/public/upload/test.jpg';

describe('Funciones en Imagenes',() => {
    describe('Verificación de Imagen', () => {
        let likes = 0;
        
        test('Verificación de like', async () => {
            const newImg = new Image({
                title: "Test",
                filename: "test.jpg",
                description: "test descripcion",
            });
            await newImg.save();
            const contenidoImagen = fs.readFileSync(rutaOrigen);
            fs.writeFileSync(rutaDestino, contenidoImagen);
            const response = await request(app).post('/images/test.jpg/like');
            const imagetest = await Image.findOne ({ filename : {$regex: "test.jpg"} });
            likes=imagetest.likes;
            expect(response.statusCode).toBe(200);
        });
        test('Sobrecarga de likes', async () => {
            
            for(let i=0; i<20; i++){
                await request(app).post('/images/test.jpg/like');
                likes+=1;
            }
            const imagetest = await Image.findOne ({ filename :  "test.jpg" });
            expect(imagetest.likes).toBe(likes);
            await imagetest.deleteOne();
        });
    });

});