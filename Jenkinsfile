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
                    if (isUnix()) {sh 'npm install'}
                    else {bat 'npm install'}
                }
            }
        }


        stage('Analisis SonarQube') {
            steps {
                script {
                    withSonarQubeEnv('SonnarScannerQube') {
                        bat 'sonar-scanner -Dsonar.projectKey=ProyectoFinalSonnar'
                    }
                }
            }
        }


       stage('Construir imagen Docker') {
            steps {
                script {
                    if (isUnix()) {sh 'docker build -t proyecto-final .'}
                    else {bat 'docker build -t proyecto-final .'}
                }
            }
        }

        stage('Despliegue automatico') {
            steps {
                script {
                    if (isUnix()) {sh 'docker-compose up -d'}
                    else {bat 'docker-compose up -d'}
                }
            }
        }
    }
}