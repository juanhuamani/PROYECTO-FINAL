pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git 'https://github.com/juanhuamani/PROYECTO-FINAL.git'
            }
        }

        stage('Construir imagen Docker') {
            steps {
                sh 'docker build -t ConstuccionFinal .'
            }
        }

        stage('Desplegar Docker Compose') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
