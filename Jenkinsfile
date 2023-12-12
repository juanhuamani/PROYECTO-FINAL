pipeline {
    agent any

    environment {
        PATH = "$PATH:/c/Program Files/Docker/Docker/resources/bin:/c/ProgramData/DockerDesktop/version-bin"
    }

    stages {
        stage('Clonar repositorio') {
            steps {
                git 'https://github.com/juanhuamani/PROYECTO-FINAL.git'
            }
        }

        stage('Construccion automatica') {
            steps {
                script {
                    bat 'npm install'
                    bat 'npm run dev'
                    bat 'ping localhost -n 11 > nul && taskkill /F /IM node.exe'
                }
            }
        }

        stage('Construir imagen Docker') {
            steps {
                script {
                    bat 'docker build -t proyecto-final .'
                }
            }
        }

        stage('Despliegue automatico') {
            steps {
                script {
                    bat 'docker-compose up -d'
                }
            }
        }
    }
}
