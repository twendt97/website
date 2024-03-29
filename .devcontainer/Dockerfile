# [Choice] Node.js version (use -bookworm, and -bullseye variants on local arm64/Apple Silicon): 20, 18, 16, 20-bookworm, 18-bookworm, 16-bookworm 20-bullseye, 18-bullseye, 16-bullseye, 20-buster, 18-buster, 16-buster
ARG VARIANT=20.2.0-bullseye
FROM node:${VARIANT}

ARG USERNAME=node
ARG NPM_GLOBAL=/usr/local/share/npm-global

# Add NPM global to PATH.
ENV PATH=${NPM_GLOBAL}/bin:${PATH}

RUN \
    # Configure global npm install location, use group to adapt to UID/GID changes
    if ! cat /etc/group | grep -e "^npm:" > /dev/null 2>&1; then groupadd -r npm; fi \
    && usermod -a -G npm ${USERNAME} \
    && umask 0002 \
    && mkdir -p ${NPM_GLOBAL} \
    && touch /usr/local/etc/npmrc \
    && chown ${USERNAME}:npm ${NPM_GLOBAL} /usr/local/etc/npmrc \
    && chmod g+s ${NPM_GLOBAL} \
    && npm config -g set prefix ${NPM_GLOBAL} \
    && su ${USERNAME} -c "npm config -g set prefix ${NPM_GLOBAL}" \
    # Install eslint
    && su ${USERNAME} -c "umask 0002 && npm install -g eslint" \
    && npm cache clean --force > /dev/null 2>&1

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
RUN su node -c "npm install -g gatsby-cli"

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends python3 python3-pip python3-venv

ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV 
ENV PATH="$VIRTUAL_ENV/bin:$PATH"
COPY requirements.txt .
RUN pip3 install --upgrade pip && pip3 install --upgrade -r /requirements.txt \
    && rm -f /requirements.txt \
    && chown --recursive ${USERNAME}:${USERNAME} $VIRTUAL_ENV \
    && echo "source /usr/share/bash-completion/completions/git" >> /home/${USERNAME}/.bashrc