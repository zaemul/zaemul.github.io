if [ ! -d build ]; then
  mkdir build
fi
cd build
if [ ! -f CNAME ]; then
  echo "ddangkong.me" > CNAME
fi
cd ..