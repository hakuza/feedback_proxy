# What image do you want to start building on?
FROM node:8.9.1

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/proxy

# Tell your container where your app's source code will live
WORKDIR /src/proxy

COPY package.json /src/proxy
# What source code do you what to copy, and where to put it?
RUN npm install

# Does your app have any dependencies that should be installed?
COPY . /src/proxy

# What port will the container talk to the outside world with once created?
EXPOSE 3000

# How do you start your app?
CMD [ "npm", "start" ]