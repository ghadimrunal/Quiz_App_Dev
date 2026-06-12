pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/ghadimrunal/Quiz_App_Dev.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker build -t quiz-frontend ./frontend'
                sh 'docker build -t quiz-backend ./backend'
            }
        }

        stage('Stop Old Containers') {
            steps {
                sh 'docker compose down || true'
            }
        }

        stage('Start New Containers') {
            steps {
                sh 'docker compose up -d --build'
            }
        }

        stage('Deploy using Ansible') {
    steps {
        sh 'wsl bash -lc "cd /mnt/c/ProgramData/Jenkins/.jenkins/workspace/mern-devops-pipeline && ansible-playbook -i ansible/inventory.ini ansible/deploy.yml"'
    }
}
    }
}