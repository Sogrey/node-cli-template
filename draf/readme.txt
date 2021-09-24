https://blog.csdn.net/qq_35809147/article/details/88635153


获得服务器硬件信息（CPUID、硬盘号、主板序列号、IP地址等）

--------linux命令:----------
获取IP地址
ifconfig -a

获取CPU信息:
dmidecode -t processor | grep ‘ID’
#lscpu
#cat /proc/cpuinfo
#dmidecode -t processor
#dmidecode | grep “CPU” //获取CPU信息

主板:
dmidecode |grep ‘Serial Number’

获取硬盘信息:
fdisk -l

------windows命令:---------

获取IP地址
ipconfig
ipconfig/all

获取CPU序列号
wmic CPU get ProcessorID

获取硬盘序列号：
1，diskpart 2，list disk 3，select disk 0 4，detail disk

查找硬盘序列号
wmic diskdrive get SerialNumber

查找主板厂商和型号
wmic BaseBoard get Manufacturer
wmic BaseBoard get Product









////////////

Node.js 实现 zip压缩和解压
https://blog.csdn.net/qq_21460229/article/details/101429876

