# Deploy lambdas

     - run:
         name: Deploy Serverless Lambdas
         command: |
           if [ “${CIRCLE_BRANCH}” == “dev” ]; then
             *RUN YOUR SERVERLESS DEPLOYMENT TO DEV*

           elif [ “${CIRCLE_BRANCH}” == “prod” ]; then
             *RUN YOUR SERVERLESS DEPLOYMENT TO PROD*
