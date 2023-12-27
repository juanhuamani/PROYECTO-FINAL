const fs = require('fs');
const path = require('path');
const request = require ('supertest');
const express = require("express");
const {Image} = require("../src/models/index");
const config = require("../src/server/config");

const app = config(express());
require("../src/database");


describe('Get URLS', () => {
    test('Get homeroute', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});
describe('Creación, verificación y eliminación de Imagenes', () => {
    const rutaOrigen = 'test/test.jpg';
    const rutaDestino = 'src/public/upload/test.jpg';

    const contenidoImagen = fs.readFileSync(rutaOrigen);
    fs.writeFileSync(rutaDestino, contenidoImagen);
    
    const newImage = new Image({
        title: "Test",
        filename: "test.jpg",
        description: "Test"
    });
    test('Creación de Imagen', async () => {
        await newImage.save();
        const response = await request(app).get('/images/test');
        expect(response.statusCode).toBe(200);
    });
    
    test('Eliminación de Imagen', async() => {
        const response= await request(app).delete('/images/test');
        const imagetest = await Image.findOne ({ filename : {$regex: "test.jpg"} });
        //expect(likes).toBe(imagetest.likes);
        console.log(imagetest);
        expect(response.status).toBe(200);
    }); 
});