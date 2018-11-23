### layout of openbsd filesystem
( see ```man hier``` for the full rundown )

More interesting aspects

/bsd     pure kernel executable --> OS loaded into memory at boot
/bsd.mp  pure kernel executable for multiprocessor machines
/bsd.rd  installation kernel
/bsd.sp  pure kernel executable for single processor machines
/etc     system configuration
         /rc.d  packages, scripts, config for ```rc```
         /skel  sample dotfiles
         /ssh   ssh/d config
/usr     user utilities and applications
         /local/bin --> location for bins of installed packages
         /ports     --> location of OpenBSD ports

