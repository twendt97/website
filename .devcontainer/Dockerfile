# [Choice] Node.js version (use -bookworm, and -bullseye variants on local arm64/Apple Silicon): 20, 18, 16, 20-bookworm, 18-bookworm, 16-bookworm 20-bullseye, 18-bullseye, 16-bullseye, 20-buster, 18-buster, 16-buster
FROM mcr.microsoft.com/devcontainers/javascript-node:latest
ARG USERNAME=node

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

RUN echo "source /usr/share/bash-completion/completions/git" >> /home/${USERNAME}/.bashrc

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
RUN su node -c "npm install -g gatsby-cli"
