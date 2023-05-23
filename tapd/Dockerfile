# IMAGE FOR BUILDING
FROM golang:1.19.7-alpine as builder 

ENV CGO_ENABLED=0

ARG checkout="main"

# Install dependencies and build the binaries.
RUN apk add --no-cache --update alpine-sdk \
    git \
    make \
    gcc \
    &&  git clone https://github.com/lightninglabs/taproot-assets /go/src/github.com/lightninglabs/taproot-assets \
    &&  cd /go/src/github.com/lightninglabs/taproot-assets \
    &&  git checkout $checkout \
    &&  make \
    &&  make install

# FINAL IMAGE
FROM alpine as final

# Add bash and ca-certs, for quality of life and SSL-related reasons.
RUN apk --no-cache add \
    bash \
    su-exec \
    ca-certificates

COPY --from=builder /go/bin/tapd /bin/
COPY --from=builder /go/bin/tapcli /bin/

#COPY docker-entrypoint.sh /entrypoint.sh

RUN USERID=${USERID:-1000} && \
    GROUPID=${GROUPID:-1000} && \
    echo "adding user you ($USERID:$GROUPID)" && \
    addgroup -g $GROUPID friends && \
    adduser -D -u $USERID -G friends you

USER you

# Define a root volume for data persistence.
VOLUME /root/.tapd
VOLUME /root/.lnd

#RUN chmod a+x /entrypoint.sh
VOLUME ["/home/you/.lnd"]
VOLUME ["/home/you/.tapd"]

COPY tapd.conf /root/.tapd/
COPY tapd.conf /home/you/.tapd/

EXPOSE 8089 10029

# Specify the start command and entrypoint as the tap daemon.
#ENTRYPOINT ["/entrypoint.sh"]

CMD ["tapd"]