mkdir /var/lib/origin/openshift.local.data
oc cluster up --public-hostname=10.1.2.2 --routing-suffix=10.1.2.2.nip.io --host-data-dir=/var/lib/origin/openshift.local.data --use-existing-config

#export KUBECONFIG=/var/lib/origin/openshift.local.config/master/admin.kubeconfig
#export CURL_CA_BUNDLE=/var/lib/origin/openshift.local.config/master/ca.crt
#sudo chmod +r /var/lib/origin/openshift.local.config/master/admin.kubeconfig

oc adm policy add-cluster-role-to-user admin admin
oc login -u admin -p admin

oc new-project redcon-devtest --display-name="RedCon - DevTest"
oc new-project redcon-postdevtest --display-name="RedCon - PostDevTest"
oc new-project redcon-cicd --display-name="RedConnect DevTest CI/CD Pipeline"
oc policy add-role-to-user edit system:serviceaccount:redcon-cicd:jenkins -n redcon-devtest
oc policy add-role-to-user edit system:serviceaccount:redcon-cicd:jenkins -n redcon-postdevtest
oc process -f redcon-cicd-template.yaml -v DEV_PROJECT=redcon-devtest -v STAGE_PROJECT=redcon-postdevtest | oc create -f - -n redcon-cicd

docker login -u $(oc whoami -t) -p $(oc whoami -t) 172.30.1.1:5000

#docker build -t ml9as ./servers/DATA/MarkLogic/
#docker run --name ml9as -d -p 8000:8000 -p 8001:8001 -p 8002:8002 -p 8004:8004 -p 8005:8005 -p 7997:7997 -p 30050:30050 -p 30051:30051 --privileged=true -v /var/opt/MarkLogic:/var/opt/MarkLogic ml9as


#docker tag node-ml 172.30.1.1:5000/redcon-devtest/node-ml
#docker login -u $(oc whoami -t) -p $(oc whoami -t) 172.30.1.1:5000
#docker push 172.30.1.1:5000/redcon-devtest/node-ml

./servers/API/NodeJS/make build

oc project redcon-devtest
docker tag node-ml 172.30.1.1:5000/redcon-devtest/node-ml
docker login -u $(oc whoami -t) -p $(oc whoami -t) 172.30.1.1:5000
docker push 172.30.1.1:5000/redcon-devtest/node-ml

oc create -f node-ml.yaml
oc new-app node-ml-template



docker build -t redcon/icdapi ./servers/API/NodeJS/
docker tag redcon/icdapi 172.30.1.1:5000/redcon-devtest/icdapi
docker push 172.30.1.1:5000/redcon-devtest/icdapi

#oc project redcon-devtest
oc new-app mlnode
docker tag node-ml 172.30.1.1:5000/redcon-devtest/node-ml
docker login -u $(oc whoami -t) -p $(oc whoami -t) 172.30.1.1:5000
docker push 172.30.1.1:5000/redcon-devtest/node-ml

oc create -f node-ml.yaml
oc new-app node-ml-api