pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'npm install' 
            }
        }

        stage('Test') {
            steps {
                sh 'npm test' 
            }
        }

        stage('Deploy') {
            steps {

                sh 'npm run dev' 
            }
        }
    }

    post {
        success {
            // Acciones a realizar cuando el pipeline es exitoso
            echo 'El pipeline se ejecutó con éxito'
        }
        failure {
            // Acciones a realizar cuando el pipeline falla
            echo 'El pipeline ha fallado'
        }
    }
}
