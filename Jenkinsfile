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

    stage('Ejecutar tests') {
        steps {
            script {
                if (isUnix()) {sh 'npm test'}
                else {bat 'npm test'}
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
        stage('Ejecutar proyecto'){
            steps{
                script{
                    if (isUnix()) {sh 'npm run dev'}
                    else {bat 'npm run dev'}
                }
            }
        }

         stage('JMeter tests') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'jmeter -n -t ./tests/jmeter/test.jmx -l result.csv'
                        perfReport 'result.csv'
                    } else {
                        bat 'jmeter -n -t path\\to\\your\\test.jmx -l testresults.jtl'
                    }
                }
            }
        }

        stage('OWASP Dependency-Check Vulnerabilities') {
          steps {
            dependencyCheck additionalArguments: ''' 
                        -o './'
                        -s './'
                        -f 'ALL' 
                        --prettyPrint''', odcInstallation: 'OWASP Dependency-Check Vulnerabilities'
            
            dependencyCheckPublisher pattern: 'dependency-check-report.xml'
          }
        }
    }
}