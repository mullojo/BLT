FROM ubuntu:20.04
RUN apt-get update -y && DEBIAN_FRONTEND=noninteractive apt-get install -y\
    git\
    wget\
    build-essential\
    libtool\
    autotools-dev\
    automake\
    pkg-config\
    bsdmainutils\
    python3\
    libevent-dev\
    libboost-dev\
    libboost-system-dev\
    libboost-filesystem-dev\
    libboost-test-dev\
    libboost-all-dev\
    libssl-dev\
    libzmq3-dev
RUN git clone https://github.com/bitcoin/bitcoin.git
WORKDIR /bitcoin
RUN git checkout v22.0
RUN ./autogen.sh
RUN ./contrib/install_db4.sh `pwd`
RUN ./configure CXXFLAGS="-O0" BDB_LIBS="-L/bitcoin/db4/lib -ldb_cxx-4.8" BDB_CFLAGS="-I/bitcoin/db4/include" --with-gui=no
RUN make && make install
WORKDIR /