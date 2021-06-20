# for front: FROM node:14.14.0 as node
FROM ruby:3.0.0

# Setup to use ja_JP in Ruby
RUN apt-get update -qq && apt-get install -y locales
RUN locale-gen ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LC_CTYPE ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP.utf8

# Setup Node.js & Yarn
# COPY --from=node /usr/local/bin/node /usr/local/bin/
# RUN ln -s ../lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm
# COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules
# RUN npm install -g yarn

RUN gem update --system
ENV BUNDLER_VERSION 2.1.4
RUN gem install bundler -v $BUNDLER_VERSION --no-doc

RUN mkdir /app
WORKDIR /app

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
