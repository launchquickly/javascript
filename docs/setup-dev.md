# Set-up Javascript development environment

**Objective**: Set-up and install the necessary software to provide a Vagrant based development environment for Javascript

Vagrant based development environment for developing with Javascript. This will consist of 1 VM:

- **js-code** - desktop environment for running IDE and code within

Vagrant VMs are being used for development environment configurations to make set-up and configuration as repeatable and automated as possible.

## VM configuration details

### js-code

- Ubuntu 20.04 desktop 
    - UK keyboard and formats set-up
    - Timezone set to UTC
- VS Code 
    - remote SSH extension
- Git 2.x
- master branch of github.com/launchquickly/javascript repository cloned to /home/vagrant/javascript
    - configured for ssh access

## Pre-requisites

- [Virtualbox](https://www.virtualbox.org/wiki/Downloads) 6.1.6 or above is installed on host machine
- [Vagrant](https://www.vagrantup.com/downloads) 2.2.13 or above is installed on host machine

## Steps to set-up

### On host machine

1. [Download](https://github.com/launchquickly/javascript/archive/master.zip) zip of repository
2. Unzip repository to directory you wish to use
3. Open command prompt and change into javascript/dev directory of repository
4. Create, configure, and start VM from command prompt:
```
C:\Users\AUser\dev\javascript\dev> vagrant up
```
5. Login to js-code desktop as "vagrant" user using "vagrant" password

### On js-code

6. Start VS Code 
7. (Optional) Configure git set-up
7.1. Set global gitconfig options, otherwise vagrant name and email will be used:
```console
vagrant@js-code:~$ git config --global user.name "John Doe"
vagrant@js-code:~$ git config --global user.email johndoe@example.com
```
8. (Optional) Generate and upload ssh keys for git operations with github.com or similar:
8.1. Generate public/private keys. Note if you set a passphrase (recommended) you will have to use commandline to push changes to github.com, etc as VS code does not yet handle passphrases for remote repositories.
```console
vagrant@js-code:~$ ssh-keygen -t rsa -b 4096 -C "johndoe@example.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/home/vagrant/.ssh/id_rsa):
Enter passphrase (empty no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/vagrant/.ssh/id_rsa
Your public key has been saved in /home/vagrant/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:4Jdh+Px8Dm8UNji0qOEDuvKus3yhQJcnSLFICyKu5Ew johndoe@example.com
The key's randomart image is:
+---[RSA 4096]----+
|+o.              |
|B.o    .  .      |
|oE. . o oo o     |
|*o +.o.=.o+ +    |
|oo..oo.oS  o o   |
|. ..  +. o  .    |
|. ...  .  +..    |
|+...       =.    |
|oO+        .o    |
+----[SHA256]-----+
vagrant@js-code:~$
```
8.2. Copy contents of public key to Github account, or similar.
```console
vagrant@js-code:~$ cat ~/.ssh/id_rsa.pub
```
8.3. Add any necessary host information to enable git ssh access to ~/.ssh/config. e.g.:
```console
vagrant@js-code:~$ vi ~/.ssh/config

Host github.com
  User johndoe
  Hostname ssh.github.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa
  Port 443

```