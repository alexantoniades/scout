# scout :watch: :telescope:

*A simple ansible playbook and nodejs app to watch file changes and log them to a CouchDB database using PouchDB*

## Dependencies
* NPM
* NodeJS
* Python3
* Ansible

### Installing dependencies
#### Ubuntu
```bash
# Install dependencies 
sudo apt install python3 python3-pip nodejs git
# Install Ansible using PIP3
sudo pip3 install ansible
git clone https://github.com/alexantoniades/scout.git
cd scout
ansible-playbook install.yml
```
#### CentOS/RHEL
```bash
# Install dependencies 
sudo yum install python3 python3-pip nodejs git
# Install Ansible using PIP3
sudo pip3 install ansible
git clone https://github.com/alexantoniades/scout.git
cd scout
ansible-playbook install.yml
```
#### OpenSUSE
```bash
# Install dependencies 
sudo zypper install python3 python3-pip nodejs git
# Install Ansible using PIP3
sudo pip3 install ansible
git clone https://github.com/alexantoniades/scout.git
cd scout
ansible-playbook install.yml
```
#### MacOS
```bash
# Install dependencies 
sudo brew install python3 python3-pip nodejs git
# Install Ansible using PIP3
sudo pip3 install ansible
git clone https://github.com/alexantoniades/scout.git
cd scout
ansible-playbook install.yml
```

### Start file watch
* /path/to/directory should be replaced with the target directory to watch
* database name should be replaced with the database name or the URl of the server if initialised (https://localhost:8080/database_name)
```bash
node scout.js /path/to/directory database_name
```

### Start PouchDB Server
If the database server is used, the admin panel can be accessed at "http://localhost:8080/_utils"

The "--dir" parameter specifies the path to the database files

A server log can be found in the repo directory after initial start of the server (log.txt)
```bash
# Default port and directory is 8080 and ./database
pouchdb-server --port 8080 --dir ./database
```

