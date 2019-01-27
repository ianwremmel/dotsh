#!/usr/bin/env bash

# ~/.profile: executed by the command interpreter for login shells.
# This file is not read by bash(1), if ~/.bash_profile or ~/.bash_login
# exists.
# Since this file is superceded by .bash_profile, .bash_profile should probably
# source it

# ~/.bash_profile: The personal initialization file, executed for login shells.
# On OSX, this file is read by every Terminal.app instance

# ~/.bashrc: The individual per-interactive-shell startup file (for non-login
# shells), On OSX, this file is only read when executing e.g. `bash` or
# `su <username>`

# non-login shells: a shell launched from another shell (e.g. running `bash`,
# running `su <username>` the command line, or launching xterm)

# login shells: a shell resultant from entering a username and password (e.g.
# logging into a linux box on startup, connecting via ssh).

# On macOS, all Terminal.app instances are treated as login shells.

# In order to keep your home dir managable, we try to minimize the number of
# loose files by putting as many as possible in .dotsh.d

source ./.dotsh.d/bash_profile
