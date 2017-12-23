// https://opensource.apple.com/source/xnu/xnu-1504.3.12/bsd/kern/syscalls.master
const SYS = {
    nosys: 0, // 0	AUE_NULL	ALL	{ int nosys(void); }   { indirect syscall }
    exit: 1, // 1	AUE_EXIT	ALL	{ void exit(int rval); }
    fork: 2, // 2	AUE_FORK	ALL	{ int fork(void); }
    read: 3, // 3	AUE_NULL	ALL	{ user_ssize_t read(int fd, user_addr_t cbuf, user_size_t nbyte); }
    write: 4, // 4	AUE_NULL	ALL	{ user_ssize_t write(int fd, user_addr_t cbuf, user_size_t nbyte); }
    open: 5, // 5	AUE_OPEN_RWTC	ALL	{ int open(user_addr_t path, int flags, int mode); }
    close: 6, // 6	AUE_CLOSE	ALL	{ int close(int fd); }
    wait4: 7, // 7	AUE_WAIT4	ALL	{ int wait4(int pid, user_addr_t status, int options, user_addr_t rusage); }
    // 8	AUE_NULL	ALL	{ int nosys(void); }   { old creat }
    link: 9, // 9	AUE_LINK	ALL	{ int link(user_addr_t path, user_addr_t link); }
    unlink: 10, // 10	AUE_UNLINK	ALL	{ int unlink(user_addr_t path); }
    // 11	AUE_NULL	ALL	{ int nosys(void); }   { old execv }
    chdir: 12, // 12	AUE_CHDIR	ALL	{ int chdir(user_addr_t path); }
    fchdir: 13, // 13	AUE_FCHDIR	ALL	{ int fchdir(int fd); }
    mknod: 14, // 14	AUE_MKNOD	ALL	{ int mknod(user_addr_t path, int mode, int dev); }
    chmod: 15, // 15	AUE_CHMOD	ALL	{ int chmod(user_addr_t path, int mode); }
    chown: 16, // 16	AUE_CHOWN	ALL	{ int chown(user_addr_t path, int uid, int gid); }
    // 17	AUE_NULL	ALL	{ int nosys(void); }   { old break }
    getfsstat: 18, // 18	AUE_GETFSSTAT	ALL	{ int getfsstat(user_addr_t buf, int bufsize, int flags); }
    // 19	AUE_NULL	ALL	{ int nosys(void); }   { old lseek }
    getpid: 20, // 20	AUE_GETPID	ALL	{ int getpid(void); }
    // 21	AUE_NULL	ALL	{ int nosys(void); }   { old mount }
    // 22	AUE_NULL	ALL	{ int nosys(void); }   { old umount }
    setuid: 23, // 23	AUE_SETUID	ALL	{ int setuid(uid_t uid); }
    getuid: 24, // 24	AUE_GETUID	ALL	{ int getuid(void); }
    geteuid: 25, // 25	AUE_GETEUID	ALL	{ int geteuid(void); }
    ptrace: 26, // 26	AUE_PTRACE	ALL	{ int ptrace(int req, pid_t pid, caddr_t addr, int data); }
    recvmsg: 27, // 27	AUE_RECVMSG	ALL	{ int recvmsg(int s, struct msghdr *msg, int flags); }
    sendmsg: 28, // 28	AUE_SENDMSG	ALL	{ int sendmsg(int s, caddr_t msg, int flags); }
    recvfrom: 29, // 29	AUE_RECVFROM	ALL	{ int recvfrom(int s, void *buf, size_t len, int flags, struct sockaddr *from, int *fromlenaddr); }
    accept: 30, // 30	AUE_ACCEPT	ALL	{ int accept(int s, caddr_t name, socklen_t	*anamelen); }
    getpeername: 31, // 31	AUE_GETPEERNAME	ALL	{ int getpeername(int fdes, caddr_t asa, socklen_t *alen); }
    getsockname: 32, // 32	AUE_GETSOCKNAME	ALL	{ int getsockname(int fdes, caddr_t asa, socklen_t *alen); }
    access: 33, // 33	AUE_ACCESS	ALL	{ int access(user_addr_t path, int flags); }
    chflags: 34, // 34	AUE_CHFLAGS	ALL	{ int chflags(char *path, int flags); }
    fchflags: 35, // 35	AUE_FCHFLAGS	ALL	{ int fchflags(int fd, int flags); }
// 36	AUE_SYNC	ALL	{ int sync(void); }
// 37	AUE_KILL	ALL	{ int kill(int pid, int signum, int posix); }
// 38	AUE_NULL	ALL	{ int nosys(void); }   { old stat  }
// 39	AUE_GETPPID	ALL	{ int getppid(void); }
// 40	AUE_NULL	ALL	{ int nosys(void); }   { old lstat }
// 41	AUE_DUP		ALL	{ int dup(u_int fd); }
// 42	AUE_PIPE	ALL	{ int pipe(void); }
// 43	AUE_GETEGID	ALL	{ int getegid(void); }
// 44	AUE_PROFILE	ALL	{ int profil(short *bufbase, size_t bufsize, u_long pcoffset, u_int pcscale); }
// 45	AUE_NULL	ALL	{ int nosys(void); } { old ktrace }
// 46	AUE_SIGACTION	ALL	{ int sigaction(int signum, struct __sigaction *nsa, struct sigaction *osa); }
// 47	AUE_GETGID	ALL	{ int getgid(void); }
// 48	AUE_SIGPROCMASK	ALL	{ int sigprocmask(int how, user_addr_t mask, user_addr_t omask); }
// 49	AUE_GETLOGIN	ALL	{ int getlogin(char *namebuf, u_int namelen); }
// 50	AUE_SETLOGIN	ALL	{ int setlogin(char *namebuf); }
// 51	AUE_ACCT	ALL	{ int acct(char *path); }
// 52	AUE_SIGPENDING	ALL	{ int sigpending(struct sigvec *osv); }
// 53	AUE_SIGALTSTACK	ALL	{ int sigaltstack(struct sigaltstack *nss, struct sigaltstack *oss); }
// 54	AUE_IOCTL	ALL	{ int ioctl(int fd, u_long com, caddr_t data); }
// 55	AUE_REBOOT	ALL	{ int reboot(int opt, char *command); }
// 56	AUE_REVOKE	ALL	{ int revoke(char *path); }
// 57	AUE_SYMLINK	ALL	{ int symlink(char *path, char *link); }
// 58	AUE_READLINK	ALL	{ int readlink(char *path, char *buf, int count); }
// 59	AUE_EXECVE	ALL	{ int execve(char *fname, char **argp, char **envp); }
// 60	AUE_UMASK	ALL	{ int umask(int newmask); }
// 61	AUE_CHROOT	ALL	{ int chroot(user_addr_t path); }
// 62	AUE_NULL	ALL	{ int nosys(void); }   { old fstat }
// 63	AUE_NULL	ALL	{ int nosys(void); }   { used internally, reserved }
// 64	AUE_NULL	ALL	{ int nosys(void); }   { old getpagesize }
// 65	AUE_MSYNC	ALL	{ int msync(caddr_t addr, size_t len, int flags); }
// 66	AUE_VFORK	ALL	{ int vfork(void); }
// 67	AUE_NULL	ALL	{ int nosys(void); }   { old vread }
// 68	AUE_NULL	ALL	{ int nosys(void); }   { old vwrite }
// 69	AUE_NULL	ALL	{ int nosys(void); }   { old sbrk }
// 70	AUE_NULL	ALL	{ int nosys(void); }   { old sstk }
// 71	AUE_NULL	ALL	{ int nosys(void); }   { old mmap }
// 72	AUE_NULL	ALL	{ int nosys(void); }   { old vadvise }
// 73	AUE_MUNMAP	ALL	{ int munmap(caddr_t addr, size_t len); }
// 74	AUE_MPROTECT	ALL	{ int mprotect(caddr_t addr, size_t len, int prot); }
// 75	AUE_MADVISE	ALL	{ int madvise(caddr_t addr, size_t len, int behav); }
// 76	AUE_NULL	ALL	{ int nosys(void); }   { old vhangup }
// 77	AUE_NULL	ALL	{ int nosys(void); }   { old vlimit }
// 78	AUE_MINCORE	ALL	{ int mincore(user_addr_t addr, user_size_t len, user_addr_t vec); }
// 79	AUE_GETGROUPS	ALL	{ int getgroups(u_int gidsetsize, gid_t *gidset); }
// 80	AUE_SETGROUPS	ALL	{ int setgroups(u_int gidsetsize, gid_t *gidset); }
// 81	AUE_GETPGRP	ALL	{ int getpgrp(void); }
// 82	AUE_SETPGRP	ALL	{ int setpgid(int pid, int pgid); }
// 83	AUE_SETITIMER	ALL	{ int setitimer(u_int which, struct itimerval *itv, struct itimerval *oitv); }
// 84	AUE_NULL	ALL	{ int nosys(void); }   { old wait }
// 85	AUE_SWAPON 	ALL	{ int swapon(void); }
// 86	AUE_GETITIMER	ALL	{ int getitimer(u_int which, struct itimerval *itv); }
// 87	AUE_NULL	ALL	{ int nosys(void); }   { old gethostname }
// 88	AUE_NULL	ALL	{ int nosys(void); }   { old sethostname }
// 89	AUE_GETDTABLESIZE	ALL	{ int getdtablesize(void); }
// 90	AUE_DUP2	ALL	{ int dup2(u_int from, u_int to); }
// 91	AUE_NULL	ALL	{ int nosys(void); }   { old getdopt }
// 92	AUE_FCNTL	ALL	{ int fcntl(int fd, int cmd, long arg); }
// 93	AUE_SELECT	ALL	{ int select(int nd, u_int32_t *in, u_int32_t *ou, u_int32_t *ex, struct timeval *tv); }
// 94	AUE_NULL	ALL	{ int nosys(void); }   { old setdopt }
// 95	AUE_FSYNC	ALL	{ int fsync(int fd); }
// 96	AUE_SETPRIORITY	ALL	{ int setpriority(int which, id_t who, int prio); }
// #if SOCKETS
//     97	AUE_SOCKET	ALL	{ int socket(int domain, int type, int protocol); }
// 98	AUE_CONNECT	ALL	{ int connect(int s, caddr_t name, socklen_t namelen); }
// #else
// 97	AUE_NULL	ALL	{ int nosys(void); }
// 98	AUE_NULL	ALL	{ int nosys(void); }
// #endif /* SOCKETS */
// 99	AUE_NULL	ALL	{ int nosys(void); }   { old accept }
// 100	AUE_GETPRIORITY	ALL	{ int getpriority(int which, id_t who); }
// 101	AUE_NULL	ALL	{ int nosys(void); }   { old send }
// 102	AUE_NULL	ALL	{ int nosys(void); }   { old recv }
// 103	AUE_NULL	ALL	{ int nosys(void); }   { old sigreturn }
// #if SOCKETS
//     104	AUE_BIND	ALL	{ int bind(int s, caddr_t name, socklen_t namelen); }
// 105	AUE_SETSOCKOPT	ALL	{ int setsockopt(int s, int level, int name, caddr_t val, socklen_t valsize); }
// 106	AUE_LISTEN	ALL	{ int listen(int s, int backlog); }
// #else
// 104	AUE_NULL	ALL	{ int nosys(void); }
// 105	AUE_NULL	ALL	{ int nosys(void); }
// 106	AUE_NULL	ALL	{ int nosys(void); }
// #endif /* SOCKETS */
// 107	AUE_NULL	ALL	{ int nosys(void); }   { old vtimes }
// 108	AUE_NULL	ALL	{ int nosys(void); }   { old sigvec }
// 109	AUE_NULL	ALL	{ int nosys(void); }   { old sigblock }
// 110	AUE_NULL	ALL	{ int nosys(void); }   { old sigsetmask }
// 111	AUE_NULL	ALL	{ int sigsuspend(sigset_t mask); }
// 112	AUE_NULL	ALL	{ int nosys(void); }   { old sigstack }
// #if SOCKETS
//     113	AUE_NULL	ALL	{ int nosys(void); }   { old recvmsg }
// 114	AUE_NULL	ALL	{ int nosys(void); }   { old sendmsg }
// #else
// 113	AUE_NULL	ALL	{ int nosys(void); }
// 114	AUE_NULL	ALL	{ int nosys(void); }
// #endif /* SOCKETS */
// 115	AUE_NULL	ALL	{ int nosys(void); }   { old vtrace }
// 116	AUE_GETTIMEOFDAY	ALL	{ int gettimeofday(struct timeval *tp, struct timezone *tzp); }
// 117	AUE_GETRUSAGE	ALL	{ int getrusage(int who, struct rusage *rusage); }
// #if SOCKETS
//     118	AUE_GETSOCKOPT	ALL	{ int getsockopt(int s, int level, int name, caddr_t val, socklen_t *avalsize); }
// #else
// 118	AUE_NULL	ALL	{ int nosys(void); }
// #endif /* SOCKETS */
// 119	AUE_NULL	ALL	{ int nosys(void); }   { old resuba }
// 120	AUE_READV	ALL	{ user_ssize_t readv(int fd, struct iovec *iovp, u_int iovcnt); }
// 121	AUE_WRITEV	ALL	{ user_ssize_t writev(int fd, struct iovec *iovp, u_int iovcnt); }
// 122	AUE_SETTIMEOFDAY	ALL	{ int settimeofday(struct timeval *tv, struct timezone *tzp); }
// 123	AUE_FCHOWN	ALL	{ int fchown(int fd, int uid, int gid); }
// 124	AUE_FCHMOD	ALL	{ int fchmod(int fd, int mode); }
// 125	AUE_NULL	ALL	{ int nosys(void); }   { old recvfrom }
// 126	AUE_SETREUID	ALL	{ int setreuid(uid_t ruid, uid_t euid); }
// 127	AUE_SETREGID	ALL	{ int setregid(gid_t rgid, gid_t egid); }
// 128	AUE_RENAME	ALL	{ int rename(char *from, char *to); }
// 129	AUE_NULL	ALL	{ int nosys(void); }   { old truncate }
// 130	AUE_NULL	ALL	{ int nosys(void); }   { old ftruncate }
// 131	AUE_FLOCK	ALL	{ int flock(int fd, int how); }
// 132	AUE_MKFIFO	ALL	{ int mkfifo(user_addr_t path, int mode); }
// #if SOCKETS
//     133	AUE_SENDTO	ALL	{ int sendto(int s, caddr_t buf, size_t len, int flags, caddr_t to, socklen_t tolen); }
// 134	AUE_SHUTDOWN	ALL	{ int shutdown(int s, int how); }
// 135	AUE_SOCKETPAIR	ALL	{ int socketpair(int domain, int type, int protocol, int *rsv); }
// #else
// 133	AUE_NULL	ALL	{ int nosys(void); }
// 134	AUE_NULL	ALL	{ int nosys(void); }
// 135	AUE_NULL	ALL	{ int nosys(void); }
// #endif /* SOCKETS */
// 136	AUE_MKDIR	ALL	{ int mkdir(user_addr_t path, int mode); }
// 137	AUE_RMDIR	ALL	{ int rmdir(char *path); }
// 138	AUE_UTIMES	ALL	{ int utimes(char *path, struct timeval *tptr); }
// 139	AUE_FUTIMES	ALL	{ int futimes(int fd, struct timeval *tptr); }
// 140	AUE_ADJTIME	ALL	{ int adjtime(struct timeval *delta, struct timeval *olddelta); }
// 141	AUE_NULL	ALL	{ int nosys(void); }   { old getpeername }
// 142	AUE_SYSCTL	ALL	{ int gethostuuid(unsigned char *uuid_buf, const struct timespec *timeoutp); }
// 143	AUE_NULL	ALL	{ int nosys(void); }   { old sethostid 	}
// 144	AUE_NULL	ALL	{ int nosys(void); }   { old getrlimit }
// 145	AUE_NULL	ALL	{ int nosys(void); }   { old setrlimit }
// 146	AUE_NULL	ALL	{ int nosys(void); }   { old killpg }
// 147	AUE_SETSID	ALL	{ int setsid(void); }
// 148	AUE_NULL	ALL	{ int nosys(void); }   { old setquota }
// 149	AUE_NULL	ALL	{ int nosys(void); }   { old qquota }
// 150	AUE_NULL	ALL	{ int nosys(void); }   { old getsockname }
// 151	AUE_GETPGID	ALL	{ int getpgid(pid_t pid); }
// 152	AUE_SETPRIVEXEC	ALL	{ int setprivexec(int flag); }
// 153	AUE_PREAD	ALL	{ user_ssize_t pread(int fd, user_addr_t buf, user_size_t nbyte, off_t offset); }
// 154	AUE_PWRITE	ALL	{ user_ssize_t pwrite(int fd, user_addr_t buf, user_size_t nbyte, off_t offset); }
//
// #if NFSSERVER
//     155	AUE_NFS_SVC	ALL	{ int nfssvc(int flag, caddr_t argp); }
// #else
// 155	AUE_NULL	ALL	{ int nosys(void); }
// #endif
//
// 156	AUE_NULL	ALL	{ int nosys(void); }   { old getdirentries }
// 157	AUE_STATFS	ALL	{ int statfs(char *path, struct statfs *buf); }
// 158	AUE_FSTATFS	ALL	{ int fstatfs(int fd, struct statfs *buf); }
// 159	AUE_UNMOUNT	ALL	{ int unmount(user_addr_t path, int flags); }
// 160	AUE_NULL	ALL	{ int nosys(void); }   { old async_daemon }
//
// #if NFSSERVER
//     161	AUE_NFS_GETFH	ALL	{ int getfh(char *fname, fhandle_t *fhp); }
// #else
// 161	AUE_NULL	ALL	{ int nosys(void); }
// #endif
//
// 162	AUE_NULL	ALL	{ int nosys(void); }   { old getdomainname }
// 163	AUE_NULL	ALL	{ int nosys(void); }   { old setdomainname }
// 164	AUE_NULL	ALL	{ int nosys(void); }
// 165	AUE_QUOTACTL	ALL	{ int quotactl(const char *path, int cmd, int uid, caddr_t arg); }
// 166	AUE_NULL	ALL	{ int nosys(void); }   { old exportfs }
// 167	AUE_MOUNT	ALL	{ int mount(char *type, char *path, int flags, caddr_t data); }
// 168	AUE_NULL	ALL	{ int nosys(void); }   { old ustat }
// 169	AUE_CSOPS	ALL	{ int csops(pid_t pid, uint32_t ops, user_addr_t useraddr, user_size_t usersize); }
// 170	AUE_NULL	HN	{ int nosys(void); }   { old table }
// 171	AUE_NULL	ALL	{ int nosys(void); }   { old wait3 }
// 172	AUE_NULL	ALL	{ int nosys(void); }   { old rpause	}
// 173	AUE_WAITID	ALL	{ int waitid(idtype_t idtype, id_t id, siginfo_t *infop, int options); }
// 174	AUE_NULL	ALL	{ int nosys(void); }   { old getdents }
// 175	AUE_NULL	ALL	{ int nosys(void); }   { old gc_control }
// 176	AUE_ADDPROFILE	ALL	{ int add_profil(short *bufbase, size_t bufsize, u_long pcoffset, u_int pcscale); }
// 177	AUE_NULL	ALL	{ int nosys(void); }
// 178	AUE_NULL	ALL	{ int nosys(void); }
// 179	AUE_NULL	ALL	{ int nosys(void); }
// 180	AUE_KDEBUGTRACE	ALL 	{ int kdebug_trace(int code, int arg1, int arg2, int arg3, int arg4, int arg5) NO_SYSCALL_STUB; }
// 181	AUE_SETGID	ALL	{ int setgid(gid_t gid); }
// 182	AUE_SETEGID	ALL	{ int setegid(gid_t egid); }
// 183	AUE_SETEUID	ALL	{ int seteuid(uid_t euid); }
// 184	AUE_SIGRETURN	ALL	{ int sigreturn(struct ucontext *uctx, int infostyle) NO_SYSCALL_STUB; }
// 185	AUE_CHUD	ALL 	{ int chud(uint64_t code, uint64_t arg1, uint64_t arg2, uint64_t arg3, uint64_t arg4, uint64_t arg5) NO_SYSCALL_STUB; }
// 186	AUE_NULL	ALL	{ int nosys(void); }
// 187	AUE_FDATASYNC	ALL	{ int fdatasync(int fd); }
// 188	AUE_STAT	ALL	{ int stat(user_addr_t path, user_addr_t ub); }
// 189	AUE_FSTAT	ALL	{ int fstat(int fd, user_addr_t ub); }
// 190	AUE_LSTAT	ALL	{ int lstat(user_addr_t path, user_addr_t ub); }
// 191	AUE_PATHCONF	ALL	{ int pathconf(char *path, int name); }
// 192	AUE_FPATHCONF	ALL	{ int fpathconf(int fd, int name); }
// 193	AUE_NULL	ALL	{ int nosys(void); }
// 194	AUE_GETRLIMIT	ALL	{ int getrlimit(u_int which, struct rlimit *rlp); }
// 195	AUE_SETRLIMIT	ALL	{ int setrlimit(u_int which, struct rlimit *rlp); }
// 196	AUE_GETDIRENTRIES	ALL	{ int getdirentries(int fd, char *buf, u_int count, long *basep); }
// 197	AUE_MMAP	ALL	{ user_addr_t mmap(caddr_t addr, size_t len, int prot, int flags, int fd, off_t pos); }
// 198	AUE_NULL	ALL	{ int nosys(void); } 	{ __syscall }
// 199	AUE_LSEEK	ALL	{ off_t lseek(int fd, off_t offset, int whence); }
// 200	AUE_TRUNCATE	ALL	{ int truncate(char *path, off_t length); }
// 201	AUE_FTRUNCATE	ALL	{ int ftruncate(int fd, off_t length); }
// 202	AUE_SYSCTL	ALL 	{ int __sysctl(int *name, u_int namelen, void *old, size_t *oldlenp, void *new, size_t newlen); }
// 203	AUE_MLOCK	ALL	{ int mlock(caddr_t addr, size_t len); }
// 204	AUE_MUNLOCK	ALL	{ int munlock(caddr_t addr, size_t len); }
// 205	AUE_UNDELETE	ALL	{ int undelete(user_addr_t path); }
//
// #if NETAT
//     206	AUE_ATSOCKET	ALL	{ int ATsocket(int proto); }
// 207	AUE_ATGETMSG	UALL	{ int ATgetmsg(int fd, void *ctlptr, void *datptr, int *flags); }
// 208	AUE_ATPUTMSG	UALL	{ int ATputmsg(int fd, void *ctlptr, void *datptr, int flags); }
// 209	AUE_ATPSNDREQ	UALL	{ int ATPsndreq(int fd, unsigned char *buf, int len, int nowait); }
// 210	AUE_ATPSNDRSP	UALL	{ int ATPsndrsp(int fd, unsigned char *respbuff, int resplen, int datalen); }
// 211	AUE_ATPGETREQ	UALL	{ int ATPgetreq(int fd, unsigned char *buf, int buflen); }
// 212	AUE_ATPGETRSP	UALL	{ int ATPgetrsp(int fd, unsigned char *bdsp); }
// 213	AUE_NULL	ALL	{ int nosys(void); } 	{ Reserved for AppleTalk }
// #else
// 206	AUE_NULL	ALL	{ int nosys(void); }
// 207	AUE_NULL	ALL	{ int nosys(void); }
// 208	AUE_NULL	ALL	{ int nosys(void); }
// 209	AUE_NULL	ALL	{ int nosys(void); }
// 210	AUE_NULL	ALL	{ int nosys(void); }
// 211	AUE_NULL	ALL	{ int nosys(void); }
// 212	AUE_NULL	ALL	{ int nosys(void); }
// 213	AUE_NULL	ALL	{ int nosys(void); } 	{ Reserved for AppleTalk }
// #endif /* NETAT */
//
// 214	AUE_NULL	ALL	{ int nosys(void); }
// 215	AUE_NULL	ALL	{ int nosys(void); }
//
// ; System Calls 216 - 230 are reserved for calls to support HFS/HFS Plus
// ; file system semantics. Currently, we only use 215-227.  The rest is
// ; for future expansion in anticipation of new MacOS APIs for HFS Plus.
// ; These calls are not conditionalized because while they are specific
// ; to HFS semantics, they are not specific to the HFS filesystem.
// ; We expect all filesystems to recognize the call and report that it is
// ; not supported or to actually implement it.
// 216	AUE_MKCOMPLEX	UHN	{ int mkcomplex(const char *path, mode_t mode, u_long type); } 	{ soon to be obsolete }
// 217	AUE_STATV	UHN	{ int statv(const char *path, struct vstat *vsb); } 	{ soon to be obsolete }
// 218	AUE_LSTATV	UHN	{ int lstatv(const char *path, struct vstat *vsb); } 	{ soon to be obsolete }
// 219	AUE_FSTATV	UHN	{ int fstatv(int fd, struct vstat *vsb); } 	{ soon to be obsolete }
// 220	AUE_GETATTRLIST	ALL	{ int getattrlist(const char *path, struct attrlist *alist, void *attributeBuffer, size_t bufferSize, u_long options); }
// 221	AUE_SETATTRLIST	ALL	{ int setattrlist(const char *path, struct attrlist *alist, void *attributeBuffer, size_t bufferSize, u_long options); }
// 222	AUE_GETDIRENTRIESATTR	ALL	{ int getdirentriesattr(int fd, struct attrlist *alist, void *buffer, size_t buffersize, u_long *count, u_long *basep, u_long *newstate, u_long options); }
// 223	AUE_EXCHANGEDATA	ALL	{ int exchangedata(const char *path1, const char *path2, u_long options); }
// 224	AUE_NULL		ALL { int nosys(void); } { old checkuseraccess / fsgetpath (which moved to 427) }
// 225	AUE_SEARCHFS	ALL	{ int searchfs(const char *path, struct fssearchblock *searchblock, uint32_t *nummatches, uint32_t scriptcode, uint32_t options, struct searchstate *state); }
// 226	AUE_DELETE	ALL	{ int delete(user_addr_t path) NO_SYSCALL_STUB; }       { private delete (Carbon semantics) }
// 227	AUE_COPYFILE	ALL	{ int copyfile(char *from, char *to, int mode, int flags) NO_SYSCALL_STUB; }
// 228	AUE_FGETATTRLIST	ALL	{ int fgetattrlist(int fd, struct attrlist *alist, void *attributeBuffer, size_t bufferSize, u_long options); }
// 229	AUE_FSETATTRLIST	ALL	{ int fsetattrlist(int fd, struct attrlist *alist, void *attributeBuffer, size_t bufferSize, u_long options); }
// 230	AUE_POLL	ALL	{ int poll(struct pollfd *fds, u_int nfds, int timeout); }
// 231	AUE_WATCHEVENT	ALL	{ int watchevent(struct eventreq *u_req, int u_eventmask); }
// 232	AUE_WAITEVENT	ALL	{ int waitevent(struct eventreq *u_req, struct timeval *tv); }
// 233	AUE_MODWATCH	ALL	{ int modwatch(struct eventreq *u_req, int u_eventmask); }
// 234	AUE_GETXATTR	ALL	{ user_ssize_t getxattr(user_addr_t path, user_addr_t attrname, user_addr_t value, size_t size, uint32_t position, int options); }
// 235	AUE_FGETXATTR	ALL	{ user_ssize_t fgetxattr(int fd, user_addr_t attrname, user_addr_t value, size_t size, uint32_t position, int options); }
// 236	AUE_SETXATTR	ALL	{ int setxattr(user_addr_t path, user_addr_t attrname, user_addr_t value, size_t size, uint32_t position, int options); }
// 237	AUE_FSETXATTR	ALL	{ int fsetxattr(int fd, user_addr_t attrname, user_addr_t value, size_t size, uint32_t position, int options); }
// 238	AUE_REMOVEXATTR	ALL	{ int removexattr(user_addr_t path, user_addr_t attrname, int options); }
// 239	AUE_FREMOVEXATTR	ALL	{ int fremovexattr(int fd, user_addr_t attrname, int options); }
// 240	AUE_LISTXATTR	ALL	{ user_ssize_t listxattr(user_addr_t path, user_addr_t namebuf, size_t bufsize, int options); }
// 241	AUE_FLISTXATTR	ALL	{ user_ssize_t flistxattr(int fd, user_addr_t namebuf, size_t bufsize, int options); }
// 242	AUE_FSCTL	ALL	{ int fsctl(const char *path, u_long cmd, caddr_t data, u_int options); }
// 243	AUE_INITGROUPS	ALL	{ int initgroups(u_int gidsetsize, gid_t *gidset, int gmuid); }
// 244	AUE_POSIX_SPAWN	ALL	{ int posix_spawn(pid_t *pid, const char *path, const struct _posix_spawn_args_desc *adesc, char **argv, char **envp); }
// 245	AUE_FFSCTL	ALL	{ int ffsctl(int fd, u_long cmd, caddr_t data, u_int options); }
// 246	AUE_NULL	ALL	{ int nosys(void); }
//
// #if NFSCLIENT
//     247	AUE_NULL	ALL	{ int nfsclnt(int flag, caddr_t argp); }
// #else
// 247	AUE_NULL	ALL	{ int nosys(void); }
// #endif
// #if NFSSERVER
//     248	AUE_FHOPEN	ALL	{ int fhopen(const struct fhandle *u_fhp, int flags); }
// #else
// 248	AUE_NULL	ALL	{ int nosys(void); }
// #endif
//
// 249	AUE_NULL	ALL	{ int nosys(void); }
// 250	AUE_MINHERIT	ALL	{ int minherit(void *addr, size_t len, int inherit); }
// #if SYSV_SEM
//     251	AUE_SEMSYS	ALL	{ int semsys(u_int which, int a2, int a3, int a4, int a5); }
// #else
// 251	AUE_NULL	ALL	{ int nosys(void); }
// #endif
// #if SYSV_MSG
//     252	AUE_MSGSYS	ALL	{ int msgsys(u_int which, int a2, int a3, int a4, int a5); }
// #else
// 252	AUE_NULL	ALL	{ int nosys(void); }
// #endif
// #if SYSV_SHM
//     253	AUE_SHMSYS	ALL	{ int shmsys(u_int which, int a2, int a3, int a4); }
// #else
// 253	AUE_NULL	ALL	{ int nosys(void); }
// #endif
// #if SYSV_SEM
//     254	AUE_SEMCTL	ALL	{ int semctl(int semid, int semnum, int cmd, semun_t arg); }
// 255	AUE_SEMGET	ALL	{ int semget(key_t key, int	nsems, int semflg); }
// 256	AUE_SEMOP	ALL	{ int semop(int semid, struct sembuf *sops, int nsops); }
// 257	AUE_NULL	ALL	{ int nosys(void); }
// #else
// 254	AUE_NULL	ALL	{ int nosys(void); }
// 255	AUE_NULL	ALL	{ int nosys(void); }
// 256	AUE_NULL	ALL	{ int nosys(void); }
// 257	AUE_NULL	ALL	{ int nosys(void); }
// #endif
// #if SYSV_MSG
//     258	AUE_MSGCTL	ALL	{ int msgctl(int msqid, int cmd, struct	msqid_ds *buf); }
// 259	AUE_MSGGET	ALL	{ int msgget(key_t key, int msgflg); }
// 260	AUE_MSGSND	ALL	{ int msgsnd(int msqid, void *msgp, size_t msgsz, int msgflg); }
// 261	AUE_MSGRCV	ALL	{ user_ssize_t msgrcv(int msqid, void *msgp, size_t msgsz, long msgtyp, int msgflg); }
// #else
// 258	AUE_NULL	ALL	{ int nosys(void); }
// 259	AUE_NULL	ALL	{ int nosys(void); }
// 260	AUE_NULL	ALL	{ int nosys(void); }
// 261	AUE_NULL	ALL	{ int nosys(void); }
// #endif
// #if SYSV_SHM
//     262	AUE_SHMAT	ALL	{ user_addr_t shmat(int shmid, void *shmaddr, int shmflg); }
// 263	AUE_SHMCTL	ALL	{ int shmctl(int shmid, int cmd, struct shmid_ds *buf); }
// 264	AUE_SHMDT	ALL	{ int shmdt(void *shmaddr); }
// 265	AUE_SHMGET	ALL	{ int shmget(key_t key, size_t size, int shmflg); }
// #else
// 262	AUE_NULL	ALL	{ int nosys(void); }
// 263	AUE_NULL	ALL	{ int nosys(void); }
// 264	AUE_NULL	ALL	{ int nosys(void); }
// 265	AUE_NULL	ALL	{ int nosys(void); }
// #endif
// 266	AUE_SHMOPEN	ALL	{ int shm_open(const char *name, int oflag, int mode); }
// 267	AUE_SHMUNLINK	ALL	{ int shm_unlink(const char *name); }
// 268	AUE_SEMOPEN	ALL	{ user_addr_t sem_open(const char *name, int oflag, int mode, int value); }
// 269	AUE_SEMCLOSE	ALL	{ int sem_close(sem_t *sem); }
// 270	AUE_SEMUNLINK	ALL	{ int sem_unlink(const char *name); }
// 271	AUE_SEMWAIT	ALL	{ int sem_wait(sem_t *sem); }
// 272	AUE_SEMTRYWAIT	ALL	{ int sem_trywait(sem_t *sem); }
// 273	AUE_SEMPOST	ALL	{ int sem_post(sem_t *sem); }
// 274	AUE_SEMGETVALUE	ALL	{ int sem_getvalue(sem_t *sem, int *sval); }
// 275	AUE_SEMINIT	ALL	{ int sem_init(sem_t *sem, int phsared, u_int value); }
// 276	AUE_SEMDESTROY	ALL	{ int sem_destroy(sem_t *sem); }
// 277	AUE_OPEN_EXTENDED_RWTC	ALL	{ int open_extended(user_addr_t path, int flags, uid_t uid, gid_t gid, int mode, user_addr_t xsecurity) NO_SYSCALL_STUB; }
// 278	AUE_UMASK_EXTENDED	ALL	{ int umask_extended(int newmask, user_addr_t xsecurity) NO_SYSCALL_STUB; }
// 279	AUE_STAT_EXTENDED	ALL	{ int stat_extended(user_addr_t path, user_addr_t ub, user_addr_t xsecurity, user_addr_t xsecurity_size) NO_SYSCALL_STUB; }
// 280	AUE_LSTAT_EXTENDED	ALL	{ int lstat_extended(user_addr_t path, user_addr_t ub, user_addr_t xsecurity, user_addr_t xsecurity_size) NO_SYSCALL_STUB; }
// 281	AUE_FSTAT_EXTENDED	ALL	{ int fstat_extended(int fd, user_addr_t ub, user_addr_t xsecurity, user_addr_t xsecurity_size) NO_SYSCALL_STUB; }
// 282	AUE_CHMOD_EXTENDED	ALL	{ int chmod_extended(user_addr_t path, uid_t uid, gid_t gid, int mode, user_addr_t xsecurity) NO_SYSCALL_STUB; }
// 283	AUE_FCHMOD_EXTENDED	ALL	{ int fchmod_extended(int fd, uid_t uid, gid_t gid, int mode, user_addr_t xsecurity) NO_SYSCALL_STUB; }
// 284	AUE_ACCESS_EXTENDED	ALL	{ int access_extended(user_addr_t entries, size_t size, user_addr_t results, uid_t uid) NO_SYSCALL_STUB; }
// 285	AUE_SETTID	ALL	{ int settid(uid_t uid, gid_t gid) NO_SYSCALL_STUB; }
// 286	AUE_GETTID	ALL	{ int gettid(uid_t *uidp, gid_t *gidp) NO_SYSCALL_STUB; }
// 287	AUE_SETSGROUPS	ALL	{ int setsgroups(int setlen, user_addr_t guidset) NO_SYSCALL_STUB; }
// 288	AUE_GETSGROUPS	ALL	{ int getsgroups(user_addr_t setlen, user_addr_t guidset) NO_SYSCALL_STUB; }
// 289	AUE_SETWGROUPS	ALL	{ int setwgroups(int setlen, user_addr_t guidset) NO_SYSCALL_STUB; }
// 290	AUE_GETWGROUPS	ALL	{ int getwgroups(user_addr_t setlen, user_addr_t guidset) NO_SYSCALL_STUB; }
// 291	AUE_MKFIFO_EXTENDED	ALL	{ int mkfifo_extended(user_addr_t path, uid_t uid, gid_t gid, int mode, user_addr_t xsecurity) NO_SYSCALL_STUB; }
// 292	AUE_MKDIR_EXTENDED	ALL	{ int mkdir_extended(user_addr_t path, uid_t uid, gid_t gid, int mode, user_addr_t xsecurity) NO_SYSCALL_STUB; }
// 293	AUE_IDENTITYSVC	ALL	{ int identitysvc(int opcode, user_addr_t message) NO_SYSCALL_STUB; }
// 294	AUE_NULL	ALL	{ int shared_region_check_np(uint64_t *start_address) NO_SYSCALL_STUB; }
// 295	AUE_NULL	ALL	{ int shared_region_map_np(int fd, uint32_t count, const struct shared_file_mapping_np *mappings) NO_SYSCALL_STUB; }
// 296	AUE_NULL	ALL	{ int vm_pressure_monitor(int wait_for_pressure, int nsecs_monitored, uint32_t *pages_reclaimed); }
// #if PSYNCH
//     297	AUE_NULL	ALL	{ uint32_t psynch_rw_longrdlock(user_addr_t rwlock, uint32_t lgenval, uint32_t ugenval, uint32_t rw_wc, int flags)  NO_SYSCALL_STUB; }
// 298	AUE_NULL	ALL	{ uint32_t psynch_rw_yieldwrlock(user_addr_t rwlock, uint32_t lgenval, uint32_t ugenval, uint32_t rw_wc, int flags)  NO_SYSCALL_STUB; }
// 299	AUE_NULL	ALL	{ int psynch_rw_downgrade(user_addr_t rwlock, uint32_t lgenval, uint32_t ugenval, uint32_t rw_wc, int flags)  NO_SYSCALL_STUB; }
// 300	AUE_NULL	ALL	{ uint32_t psynch_rw_upgrade(user_addr_t rwlock, uint32_t lgenval, uint32_t ugenval, uint32_t rw_wc, int flags)  NO_SYSCALL_STUB; }
// 301	AUE_NULL	ALL	{ uint32_t psynch_mutexwait(user_addr_t mutex,  uint32_t mgen, uint32_t  ugen, uint64_t tid, uint32_t flags) NO_SYSCALL_STUB; }
// 302	AUE_NULL	ALL	{ uint32_t psynch_mutexdrop(user_addr_t mutex,  uint32_t mgen, uint32_t  ugen, uint64_t tid, uint32_t flags) NO_SYSCALL_STUB; }
// 303	AUE_NULL	ALL	{ int psynch_cvbroad(user_addr_t cv, uint32_t cvgen, uint32_t diffgen, user_addr_t mutex,  uint32_t mgen, uint32_t ugen, uint64_t tid, uint32_t flags) NO_SYSCALL_STUB; }
// 304	AUE_NULL	ALL	{ int psynch_cvsignal(user_addr_t cv, uint32_t cvgen, uint32_t cvugen, user_addr_t mutex,  uint32_t mgen, uint32_t ugen, int thread_port, uint32_t flags) NO_SYSCALL_STUB; }
// 305	AUE_NULL	ALL	{ uint32_t psynch_cvwait(user_addr_t cv, uint32_t cvgen, uint32_t cvugen, user_addr_t mutex,  uint32_t mgen, uint32_t ugen, uint64_t sec, uint64_t usec) NO_SYSCALL_STUB; }
// 306	AUE_NULL	ALL	{ uint32_t psynch_rw_rdlock(user_addr_t rwlock, uint32_t lgenval, uint32_t ugenval, uint32_t rw_wc, int flags)  NO_SYSCALL_STUB; }
// 307	AUE_NULL	ALL	{ uint32_t psynch_rw_wrlock(user_addr_t rwlock, uint32_t lgenval, uint32_t ugenval, uint32_t rw_wc, int flags)  NO_SYSCALL_STUB; }
// 308	AUE_NULL	ALL	{ uint32_t psynch_rw_unlock(user_addr_t rwlock, uint32_t lgenval, uint32_t ugenval, uint32_t rw_wc, int flags)  NO_SYSCALL_STUB; }
// 309	AUE_NULL	ALL	{ uint32_t psynch_rw_unlock2(user_addr_t rwlock, uint32_t lgenval, uint32_t ugenval, uint32_t rw_wc, int flags)  NO_SYSCALL_STUB; }
// #else
// 297	AUE_NULL	ALL	{ int nosys(void); } { old reset_shared_file }
// 298	AUE_NULL	ALL	{ int nosys(void); } { old new_system_shared_regions }
// 299	AUE_NULL	ALL	{ int enosys(void); } { old shared_region_map_file_np }
// 300	AUE_NULL	ALL	{ int enosys(void); } { old shared_region_make_private_np }
// 301	AUE_NULL	ALL	{ int nosys(void); }
// 302	AUE_NULL	ALL	{ int nosys(void); }
// 303	AUE_NULL	ALL	{ int nosys(void); }
// 304	AUE_NULL	ALL	{ int nosys(void); }
// 305	AUE_NULL	ALL	{ int nosys(void); }
// 306	AUE_NULL	ALL	{ int nosys(void); }
// 307	AUE_NULL	ALL	{ int nosys(void); }
// 308	AUE_NULL	ALL	{ int nosys(void); }
// 309	AUE_NULL	ALL	{ int nosys(void); }
// #endif
// 310	AUE_GETSID	ALL	{ int getsid(pid_t pid); }
// 311	AUE_SETTIDWITHPID	ALL	{ int settid_with_pid(pid_t pid, int assume) NO_SYSCALL_STUB; }
// 312	AUE_NULL	ALL	{ int nosys(void); } { old __pthread_cond_timedwait }
// 313	AUE_NULL	ALL	{ int aio_fsync(int op, user_addr_t aiocbp); }
// 314 	AUE_NULL	ALL	{ user_ssize_t aio_return(user_addr_t aiocbp); }
// 315	AUE_NULL	ALL	{ int aio_suspend(user_addr_t aiocblist, int nent, user_addr_t timeoutp); }
// 316	AUE_NULL	ALL	{ int aio_cancel(int fd, user_addr_t aiocbp); }
// 317	AUE_NULL	ALL	{ int aio_error(user_addr_t aiocbp); }
// 318	AUE_NULL	ALL	{ int aio_read(user_addr_t aiocbp); }
// 319	AUE_NULL	ALL	{ int aio_write(user_addr_t aiocbp); }
// 320	AUE_LIOLISTIO	ALL	{ int lio_listio(int mode, user_addr_t aiocblist, int nent, user_addr_t sigp); }
// 321	AUE_NULL	ALL	{ int nosys(void); } { old __pthread_cond_wait }
// 322	AUE_IOPOLICYSYS	ALL	{ int iopolicysys(int cmd, void *arg) NO_SYSCALL_STUB; }
// 323	AUE_NULL	ALL	{ int nosys(void); }
// 324	AUE_MLOCKALL	ALL	{ int mlockall(int how); }
// 325	AUE_MUNLOCKALL	ALL	{ int munlockall(int how); }
// 326	AUE_NULL	ALL	{ int nosys(void); }
// 327	AUE_ISSETUGID	ALL	{ int issetugid(void); }
// 328	AUE_PTHREADKILL	ALL	{ int __pthread_kill(int thread_port, int sig); }
// 329	AUE_PTHREADSIGMASK	ALL	{ int __pthread_sigmask(int how, user_addr_t set, user_addr_t oset); }
// 330	AUE_SIGWAIT	ALL	{ int __sigwait(user_addr_t set, user_addr_t sig); }
// 331	AUE_NULL	ALL	{ int __disable_threadsignal(int value); }
// 332	AUE_NULL	ALL	{ int __pthread_markcancel(int thread_port); }
// 333	AUE_NULL	ALL	{ int __pthread_canceled(int  action); }
//
// ;#if OLD_SEMWAIT_SIGNAL
//     ;334	AUE_NULL	ALL	{ int nosys(void); }   { old __semwait_signal }
// ;#else
// 334     AUE_SEMWAITSIGNAL       ALL     { int __semwait_signal(int cond_sem, int mutex_sem, int timeout, int relative, int64_t tv_sec, int32_t tv_nsec); }
// ;#endif
//
// 335	AUE_NULL	ALL	{ int nosys(void); }   { old utrace }
// 336	AUE_PROCINFO	ALL	{ int proc_info(int32_t callnum,int32_t pid,uint32_t flavor, uint64_t arg,user_addr_t buffer,int32_t buffersize) NO_SYSCALL_STUB; }
// #if SENDFILE
//     337	AUE_SENDFILE	ALL	{ int sendfile(int fd, int s, off_t offset, off_t *nbytes, struct sf_hdtr *hdtr, int flags); }
// #else /* !SENDFILE */
// 337	AUE_NULL	ALL	{ int nosys(void); }
// #endif /* SENDFILE */
// 338	AUE_STAT64	ALL	{ int stat64(user_addr_t path, user_addr_t ub); }
// 339	AUE_FSTAT64	ALL	{ int fstat64(int fd, user_addr_t ub); }
// 340	AUE_LSTAT64	ALL	{ int lstat64(user_addr_t path, user_addr_t ub); }
// 341	AUE_STAT64_EXTENDED	ALL	{ int stat64_extended(user_addr_t path, user_addr_t ub, user_addr_t xsecurity, user_addr_t xsecurity_size) NO_SYSCALL_STUB; }
// 342	AUE_LSTAT64_EXTENDED	ALL	{ int lstat64_extended(user_addr_t path, user_addr_t ub, user_addr_t xsecurity, user_addr_t xsecurity_size) NO_SYSCALL_STUB; }
// 343	AUE_FSTAT64_EXTENDED	ALL	{ int fstat64_extended(int fd, user_addr_t ub, user_addr_t xsecurity, user_addr_t xsecurity_size) NO_SYSCALL_STUB; }
// 344	AUE_GETDIRENTRIES64	ALL	{ user_ssize_t getdirentries64(int fd, void *buf, user_size_t bufsize, off_t *position) NO_SYSCALL_STUB; }
// 345	AUE_STATFS64	ALL	{ int statfs64(char *path, struct statfs64 *buf); }
// 346	AUE_FSTATFS64	ALL	{ int fstatfs64(int fd, struct statfs64 *buf); }
// 347	AUE_GETFSSTAT64	ALL	{ int getfsstat64(user_addr_t buf, int bufsize, int flags); }
// 348	AUE_NULL	ALL	{ int __pthread_chdir(user_addr_t path); }
// 349	AUE_NULL	ALL	{ int __pthread_fchdir(int fd); }
// 350	AUE_AUDIT	ALL	{ int audit(void *record, int length); }
// 351	AUE_AUDITON	ALL	{ int auditon(int cmd, void *data, int length); }
// 352	AUE_NULL	ALL	{ int nosys(void); }
// 353	AUE_GETAUID	ALL	{ int getauid(au_id_t *auid); }
// 354	AUE_SETAUID	ALL	{ int setauid(au_id_t *auid); }
// 355	AUE_GETAUDIT	ALL	{ int getaudit(struct auditinfo *auditinfo); }
// 356	AUE_SETAUDIT	ALL	{ int setaudit(struct auditinfo *auditinfo); }
// 357	AUE_GETAUDIT_ADDR	ALL	{ int getaudit_addr(struct auditinfo_addr *auditinfo_addr, int length); }
// 358	AUE_SETAUDIT_ADDR	ALL	{ int setaudit_addr(struct auditinfo_addr *auditinfo_addr, int length); }
// 359	AUE_AUDITCTL	ALL	{ int auditctl(char *path); }
// #if CONFIG_WORKQUEUE
//     360	AUE_NULL	ALL	{ user_addr_t bsdthread_create(user_addr_t func, user_addr_t func_arg, user_addr_t stack, user_addr_t pthread, uint32_t flags) NO_SYSCALL_STUB; }
// 361	AUE_NULL	ALL	{ int bsdthread_terminate(user_addr_t stackaddr, size_t freesize, uint32_t port, uint32_t sem) NO_SYSCALL_STUB; }
// #else
// 360	AUE_NULL	ALL	{ int nosys(void); }
// 361	AUE_NULL	ALL	{ int nosys(void); }
// #endif /* CONFIG_WORKQUEUE */
// 362	AUE_KQUEUE	ALL	{ int kqueue(void); }
// 363	AUE_NULL	ALL	{ int kevent(int fd, const struct kevent *changelist, int nchanges, struct kevent *eventlist, int nevents, const struct timespec *timeout); }
// 364	AUE_LCHOWN	ALL	{ int lchown(user_addr_t path, uid_t owner, gid_t group); }
// 365	AUE_STACKSNAPSHOT	ALL	{ int stack_snapshot(pid_t pid, user_addr_t tracebuf, uint32_t tracebuf_size, uint32_t flags, uint32_t dispatch_offset) NO_SYSCALL_STUB; }
// #if CONFIG_WORKQUEUE
//     366	AUE_NULL	ALL	{ int bsdthread_register(user_addr_t threadstart, user_addr_t wqthread, int pthsize,user_addr_t dummy_value, user_addr_t targetconc_ptr, uint64_t dispatchqueue_offset) NO_SYSCALL_STUB; }
// 367	AUE_WORKQOPEN	ALL	{ int workq_open(void) NO_SYSCALL_STUB; }
// 368	AUE_WORKQOPS	ALL	{ int workq_kernreturn(int options, user_addr_t item, int affinity, int prio) NO_SYSCALL_STUB; }
// #else
// 366	AUE_NULL	ALL	{ int nosys(void); }
// 367	AUE_NULL	ALL	{ int nosys(void); }
// 368	AUE_NULL	ALL	{ int nosys(void); }
// #endif /* CONFIG_WORKQUEUE */
// 369	AUE_NULL	ALL	{ int kevent64(int fd, const struct kevent64_s *changelist, int nchanges, struct kevent64_s *eventlist, int nevents, unsigned int flags, const struct timespec *timeout); }
// #if OLD_SEMWAIT_SIGNAL
//     370     AUE_SEMWAITSIGNAL       ALL     { int __old_semwait_signal(int cond_sem, int mutex_sem, int timeout, int relative, const struct timespec *ts); }
// 371     AUE_SEMWAITSIGNAL       ALL     { int __old_semwait_signal_nocancel(int cond_sem, int mutex_sem, int timeout, int relative, const struct timespec *ts) NO_SYSCALL_STUB; }
// #else
// 370     AUE_NULL        ALL     { int nosys(void); }   { old __semwait_signal }
// 371     AUE_NULL        ALL     { int nosys(void); }   { old __semwait_signal }
// #endif
// 372	AUE_NULL	ALL	{ user_addr_t thread_selfid (void) NO_SYSCALL_STUB; }
// 373	AUE_NULL	ALL	{ int nosys(void); }
// 374	AUE_NULL	ALL	{ int nosys(void); }
// 375	AUE_NULL	ALL	{ int nosys(void); }
// 376	AUE_NULL	ALL	{ int nosys(void); }
// 377	AUE_NULL	ALL	{ int nosys(void); }
// 378	AUE_NULL	ALL	{ int nosys(void); }
// 379	AUE_NULL	ALL	{ int nosys(void); }
// 380	AUE_MAC_EXECVE	ALL	{ int __mac_execve(char *fname, char **argp, char **envp, struct mac *mac_p); }
// 381	AUE_MAC_SYSCALL	ALL	{ int __mac_syscall(char *policy, int call, user_addr_t arg); }
// 382	AUE_MAC_GET_FILE	ALL	{ int __mac_get_file(char *path_p, struct mac *mac_p); }
// 383	AUE_MAC_SET_FILE	ALL	{ int __mac_set_file(char *path_p, struct mac *mac_p); }
// 384	AUE_MAC_GET_LINK	ALL	{ int __mac_get_link(char *path_p, struct mac *mac_p); }
// 385	AUE_MAC_SET_LINK	ALL	{ int __mac_set_link(char *path_p, struct mac *mac_p); }
// 386	AUE_MAC_GET_PROC	ALL	{ int __mac_get_proc(struct mac *mac_p); }
// 387	AUE_MAC_SET_PROC	ALL	{ int __mac_set_proc(struct mac *mac_p); }
// 388	AUE_MAC_GET_FD	ALL	{ int __mac_get_fd(int fd, struct mac *mac_p); }
// 389	AUE_MAC_SET_FD	ALL	{ int __mac_set_fd(int fd, struct mac *mac_p); }
// 390	AUE_MAC_GET_PID	ALL	{ int __mac_get_pid(pid_t pid, struct mac *mac_p); }
// 391	AUE_MAC_GET_LCID	ALL	{ int __mac_get_lcid(pid_t lcid, struct mac *mac_p); }
// 392	AUE_MAC_GET_LCTX	ALL	{ int __mac_get_lctx(struct mac *mac_p); }
// 393	AUE_MAC_SET_LCTX	ALL	{ int __mac_set_lctx(struct mac *mac_p); }
// 394	AUE_SETLCID	ALL	{ int setlcid(pid_t pid, pid_t lcid) NO_SYSCALL_STUB; }
// 395	AUE_GETLCID	ALL	{ int getlcid(pid_t pid) NO_SYSCALL_STUB; }
// 396	AUE_NULL	ALL	{ user_ssize_t read_nocancel(int fd, user_addr_t cbuf, user_size_t nbyte) NO_SYSCALL_STUB; }
// 397	AUE_NULL	ALL	{ user_ssize_t write_nocancel(int fd, user_addr_t cbuf, user_size_t nbyte) NO_SYSCALL_STUB; }
// 398	AUE_OPEN_RWTC	ALL	{ int open_nocancel(user_addr_t path, int flags, int mode) NO_SYSCALL_STUB; }
// 399	AUE_CLOSE	ALL	{ int close_nocancel(int fd) NO_SYSCALL_STUB; }
// 400	AUE_WAIT4	ALL	{ int wait4_nocancel(int pid, user_addr_t status, int options, user_addr_t rusage) NO_SYSCALL_STUB; }
// #if SOCKETS
//     401	AUE_RECVMSG	ALL	{ int recvmsg_nocancel(int s, struct msghdr *msg, int flags) NO_SYSCALL_STUB; }
// 402	AUE_SENDMSG	ALL	{ int sendmsg_nocancel(int s, caddr_t msg, int flags) NO_SYSCALL_STUB; }
// 403	AUE_RECVFROM	ALL	{ int recvfrom_nocancel(int s, void *buf, size_t len, int flags, struct sockaddr *from, int *fromlenaddr) NO_SYSCALL_STUB; }
// 404	AUE_ACCEPT	ALL	{ int accept_nocancel(int s, caddr_t name, socklen_t	*anamelen) NO_SYSCALL_STUB; }
// #else
// 401	AUE_NULL	ALL	{ int nosys(void); }
// 402	AUE_NULL	ALL	{ int nosys(void); }
// 403	AUE_NULL	ALL	{ int nosys(void); }
// 404	AUE_NULL	ALL	{ int nosys(void); }
// #endif /* SOCKETS */
// 405	AUE_MSYNC	ALL	{ int msync_nocancel(caddr_t addr, size_t len, int flags) NO_SYSCALL_STUB; }
// 406	AUE_FCNTL	ALL	{ int fcntl_nocancel(int fd, int cmd, long arg) NO_SYSCALL_STUB; }
// 407	AUE_SELECT	ALL	{ int select_nocancel(int nd, u_int32_t *in, u_int32_t *ou, u_int32_t *ex, struct timeval *tv) NO_SYSCALL_STUB; }
// 408	AUE_FSYNC	ALL	{ int fsync_nocancel(int fd) NO_SYSCALL_STUB; }
// #if SOCKETS
//     409	AUE_CONNECT	ALL	{ int connect_nocancel(int s, caddr_t name, socklen_t namelen) NO_SYSCALL_STUB; }
// #else
// 409	AUE_NULL	ALL	{ int nosys(void); }
// #endif /* SOCKETS */
// 410	AUE_NULL	ALL	{ int sigsuspend_nocancel(sigset_t mask) NO_SYSCALL_STUB; }
// 411	AUE_READV	ALL	{ user_ssize_t readv_nocancel(int fd, struct iovec *iovp, u_int iovcnt) NO_SYSCALL_STUB; }
// 412	AUE_WRITEV	ALL	{ user_ssize_t writev_nocancel(int fd, struct iovec *iovp, u_int iovcnt) NO_SYSCALL_STUB; }
// #if SOCKETS
//     413	AUE_SENDTO	ALL	{ int sendto_nocancel(int s, caddr_t buf, size_t len, int flags, caddr_t to, socklen_t tolen) NO_SYSCALL_STUB; }
// #else
// 413	AUE_NULL	ALL	{ int nosys(void); }
// #endif /* SOCKETS */
// 414	AUE_PREAD	ALL	{ user_ssize_t pread_nocancel(int fd, user_addr_t buf, user_size_t nbyte, off_t offset) NO_SYSCALL_STUB; }
// 415	AUE_PWRITE	ALL	{ user_ssize_t pwrite_nocancel(int fd, user_addr_t buf, user_size_t nbyte, off_t offset) NO_SYSCALL_STUB; }
// 416	AUE_WAITID	ALL	{ int waitid_nocancel(idtype_t idtype, id_t id, siginfo_t *infop, int options) NO_SYSCALL_STUB; }
// 417	AUE_POLL	ALL	{ int poll_nocancel(struct pollfd *fds, u_int nfds, int timeout) NO_SYSCALL_STUB; }
// #if SYSV_MSG
//     418	AUE_MSGSND	ALL	{ int msgsnd_nocancel(int msqid, void *msgp, size_t msgsz, int msgflg) NO_SYSCALL_STUB; }
// 419	AUE_MSGRCV	ALL	{ user_ssize_t msgrcv_nocancel(int msqid, void *msgp, size_t msgsz, long msgtyp, int msgflg) NO_SYSCALL_STUB; }
// #else
// 418	AUE_NULL	ALL	{ int nosys(void); }
// 419	AUE_NULL	ALL	{ int nosys(void); }
// #endif
// 420	AUE_SEMWAIT	ALL	{ int sem_wait_nocancel(sem_t *sem) NO_SYSCALL_STUB; }
// 421	AUE_NULL	ALL	{ int aio_suspend_nocancel(user_addr_t aiocblist, int nent, user_addr_t timeoutp) NO_SYSCALL_STUB; }
// 422	AUE_SIGWAIT	ALL	{ int __sigwait_nocancel(user_addr_t set, user_addr_t sig) NO_SYSCALL_STUB; }
// ;#if OLD_SEMWAIT_SIGNAL
//     ;423	AUE_NULL	ALL	{ int nosys(void); }   { old __semwait_signal_nocancel }
// ;#else
// 423     AUE_SEMWAITSIGNAL       ALL     { int __semwait_signal_nocancel(int cond_sem, int mutex_sem, int timeout, int relative, int64_t tv_sec, int32_t tv_nsec) NO_SYSCALL_STUB;}
// ;#endif
// 424	AUE_MAC_MOUNT	ALL	{ int __mac_mount(char *type, char *path, int flags, caddr_t data, struct mac *mac_p); }
// 425	AUE_MAC_GET_MOUNT	ALL	{ int __mac_get_mount(char *path, struct mac *mac_p); }
// 426	AUE_MAC_GETFSSTAT	ALL	{ int __mac_getfsstat(user_addr_t buf, int bufsize, user_addr_t mac, int macsize, int flags); }
// 427	AUE_FSGETPATH	ALL	{ user_ssize_t fsgetpath(user_addr_t buf, size_t bufsize, user_addr_t fsid, uint64_t objid) NO_SYSCALL_STUB; } { private fsgetpath (File Manager SPI) }
// 428	AUE_NULL	ALL	{ mach_port_name_t audit_session_self(void); }
// 429	AUE_NULL	ALL	{ int audit_session_join(mach_port_name_t port); }
};

export default SYS;
