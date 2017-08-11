FROM debian:jessie

RUN apt update &&\
apt install -y git curl 

RUN mkdir /home/berry && rm -rf /home/berry/.nvm && git clone --depth=1 https://github.com/creationix/nvm.git /home/berry/.nvm && (cd /home/berry/.nvm && git checkout `git describe --abbrev=0 --tags`) && . /home/berry/.nvm/nvm.sh && nvm install 8

