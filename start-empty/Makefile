# https://flow.org/en/docs/config/
.flowconfig:
	flow init --options all=true
	echo "" >> .flowconfig
	echo "[version]" >> .flowconfig
	echo "0.52.0" >> .flowconfig

all: .flowconfig
	flow stop
	flow server --debug
