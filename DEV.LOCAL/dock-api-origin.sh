#docker tag node-ml 172.30.1.1:5000/redcon-devtest/node-ml
#docker login -u $(oc whoami -t) -p $(oc whoami -t) 172.30.1.1:5000
#docker push 172.30.1.1:5000/redcon-devtest/node-ml
oc login -u admin -p admin
oc new-project mlnode
docker tag node-ml 172.30.1.1:5000/mlnode/node-ml
docker login -u $(oc whoami -t) -p $(oc whoami -t) 172.30.1.1:5000
docker push 172.30.1.1:5000/mlnode/node-ml

oc create -f node-ml.yaml
//oc new-project nodeml
oc new-app node-ml-template