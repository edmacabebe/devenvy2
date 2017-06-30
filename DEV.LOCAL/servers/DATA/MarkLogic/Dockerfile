FROM centos:centos7
LABEL authors="Richard Louapre <richard.louapre@marklogic.com>, Zoilo Dela Cruz <luxknight007@gmail.com>, Edison Macabebe <edmacabebe@gmail.com>"
#MAINTAINER Zoilo Dela Cruz <luxknight007@gmail.com>

# Please download the MarkLogic in their official site
# https://developer.marklogic.com/products

ENV WORKING_DIR /var/opt/MarkLogic
ENV ML_RPM_FILE MarkLogic.rpm
ENV ML_VERSION 9.0
ENV ML_RELEASE 1.1
#ENV ML_RPM_FILE MarkLogic-9.0-1.1.x86_64.rpm

# Download ML rpm
ADD ./tmp/${ML_RPM_FILE} /tmp/${ML_RPM_FILE}

# Update Centos7, install MarkLogic using Python
# RUN yum -y update && yum -y install \
RUN yum -y install \
  initscripts \
  /tmp/${ML_RPM_FILE} \
  python-setuptools 

# Install, Supervisor
RUN easy_install supervisor
ADD supervisord.conf /etc/supervisord.conf

# Clean up
RUN yum clean all && rm -rf /tmp/${ML_RPM_FILE}

#RUN mkdir /${WORKING_DIR} && cd /${WORKING_DIR}
WORKDIR /${WORKING_DIR}

# Expose MarkLogic admin
# 7997 = HealthCheck (HTTP)
# 8000 = App-Services (HTTP)
# 8001 = Admin (HTTP)
# 8002 = Manage (HTTP)
# Add other ports you want to expose here
EXPOSE 7997 7998 7999 8000 8001 8002 8005 8004 30050 30051


# Run Supervisor
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"] 

#docker build --rm=true -t "centos7-ml9" .
#docker run --name ml9 -d -p 8000:8000 -p 8001:8001 -p 8002:8002 -p 8004:8004 -p 8005:8005 -p 7997:7997 -p 30050:30050 -p 30051:30051 --privileged=true -v /var/opt/MarkLogic:/var/opt/MarkLogic centos7-ml9
#docker run --name ml9 -d -p 8000:8000 -p 8001:8001 -p 8002:8002 centos7-ml9