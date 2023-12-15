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
                        bat 'sonar-scanner -D sonar.projectKey=sqp_398caf2553fdc197065073a2a2459227ca74cd4d'
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