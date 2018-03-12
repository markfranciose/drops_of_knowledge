Use has() with version:

macunix       Mac version of Vim, using Unix files (OS-X)
  *note: it can be more complex for macs: http://vi.stackexchange.com/a/2577/343*
unix          Unix version of Vim
win32         Win32 (Win 95 & later, 32 or 64 bit)
win32unix     Win32, using Unix files (cygwin)

example:
```
if has ('win32')
  echo "You are on Windows!"
endif

can also use uname:
``` let uname = system('uname -a) ```
if the system has a uname program

for my use, detecting if windows or not is probably enough.
