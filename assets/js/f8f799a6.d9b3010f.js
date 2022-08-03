"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[2865],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2325:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(665),o=n(151),r=(n(9496),n(9613)),i=["components"],s={},c="Develop Applications to integrate into ClusterFactory",l={unversionedId:"guides/develop-apps",id:"guides/develop-apps",title:"Develop Applications to integrate into ClusterFactory",description:"This guide covers the general process to develop an application for Cluster",source:"@site/docs/guides/999-develop-apps.md",sourceDirName:"guides",slug:"/guides/develop-apps",permalink:"/docs/guides/develop-apps",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory-CE/tree/main/web/docs/guides/999-develop-apps.md",tags:[],version:"current",sidebarPosition:999,frontMatter:{},sidebar:"docs",previous:{title:"Deploy a LDAP server",permalink:"/docs/guides/deploy-ldap"},next:{title:"cfctl",permalink:"/docs/reference/cfctl"}},p={},u=[{value:"1. Dockerize/Containerize the application",id:"1-dockerizecontainerize-the-application",level:2},{value:"2. Testing the application with Podman",id:"2-testing-the-application-with-podman",level:2},{value:"3. Writing a Helm application",id:"3-writing-a-helm-application",level:2},{value:"4. Writing the Argo CD Application and custom values",id:"4-writing-the-argo-cd-application-and-custom-values",level:2},{value:"5. Testing on the Kubernetes cluster",id:"5-testing-on-the-kubernetes-cluster",level:2}],d={toc:u};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"develop-applications-to-integrate-into-clusterfactory"},"Develop Applications to integrate into ClusterFactory"),(0,r.kt)("p",null,"This guide covers the general process to develop an application for Cluster\nFactory and might help you to integrate your applications."),(0,r.kt)("p",null,"Let's take the example of xCAT, which is a complex bare-metal provisioning solution."),(0,r.kt)("h2",{id:"1-dockerizecontainerize-the-application"},"1. Dockerize/Containerize the application"),(0,r.kt)("p",null,"All applications are containerizable. You will need to fetch a lot of\ninformation to see how difficult it is."),(0,r.kt)("p",null,"You should check for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dependencies:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The base image (Ex: Rocky Linux)"),(0,r.kt)("li",{parentName:"ul"},"Build-time setup (enabling the services)"),(0,r.kt)("li",{parentName:"ul"},"Runtime dependencies (Ex: Perl, Apache, xCAT, ...)"),(0,r.kt)("li",{parentName:"ul"},"Runtime setup (the entry-point script)"),(0,r.kt)("li",{parentName:"ul"},"Init system (SystemD)"),(0,r.kt)("li",{parentName:"ul"},"And eventually, host dependencies"))),(0,r.kt)("li",{parentName:"ul"},"Interfaces:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Network:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All the TCP and UDP ports (Ex: DHCP, SSH, ...)"),(0,r.kt)("li",{parentName:"ul"},"Host network (Ex: The DHCP server needs the host network to receive broadcast DHCP requests.)"))),(0,r.kt)("li",{parentName:"ul"},"Volumes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Persistent Volumes (Ex: The xCAT databases.)"),(0,r.kt)("li",{parentName:"ul"},"Is it possible to set a read-only filesystem?"))))),(0,r.kt)("li",{parentName:"ul"},"Privileges",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Is it possible to run rootless?"),(0,r.kt)("li",{parentName:"ul"},"Is there any capabilities? (Ex: ",(0,r.kt)("inlineCode",{parentName:"li"},"NET_BIND_SERVICE"),", ...)")))),(0,r.kt)("p",null,"Knowing these details will make it easier to write a Dockerfile and test it."),(0,r.kt)("p",null,"The xCAT Dockerfile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM quay.io/rockylinux/rockylinux:8.4\n\nLABEL MAINTAINER Square Factory\n\nENV container docker\n\nARG xcat_version=latest\nARG xcat_reporoot=https://xcat.org/files/xcat/repos/yum\nARG xcat_baseos=rh8\n\n# Remove useless SystemD services\nRUN (cd /lib/systemd/system/sysinit.target.wants/; \\\n    for i in *; do [ $i == systemd-tmpfiles-setup.service ] || rm -f $i; done); \\\n    rm -f /lib/systemd/system/multi-user.target.wants/* \\\n    && rm -f /etc/systemd/system/*.wants/* \\\n    && rm -f /lib/systemd/system/local-fs.target.wants/* \\\n    && rm -f /lib/systemd/system/sockets.target.wants/*udev* \\\n    && rm -f /lib/systemd/system/sockets.target.wants/*initctl* \\\n    && rm -f /lib/systemd/system/basic.target.wants:/* \\\n    && rm -f /lib/systemd/system/anaconda.target.wants/*\n\n# Setup symlink\nRUN mkdir -p /xcatdata/etc/{dhcp,goconserver,xcat} && ln -sf -t /etc /xcatdata/etc/{dhcp,goconserver,xcat} && \\\n    mkdir -p /xcatdata/{install,tftpboot} && ln -sf -t / /xcatdata/{install,tftpboot}\n\n# Install dependencies\nRUN dnf install -y -q wget which \\\n    && wget ${xcat_reporoot}/${xcat_version}/$([[ "devel" = "${xcat_version}" ]] && echo \'core-snap\' || echo \'xcat-core\')/xcat-core.repo -O /etc/yum.repos.d/xcat-core.repo \\\n    && wget ${xcat_reporoot}/${xcat_version}/xcat-dep/${xcat_baseos}/$(uname -m)/xcat-dep.repo -O /etc/yum.repos.d/xcat-dep.repo \\\n    && dnf install -y \\\n    xCAT \\\n    openssh-server \\\n    rsyslog \\\n    createrepo \\\n    chrony \\\n    initscripts \\\n    man \\\n    nano \\\n    pigz \\\n    bash-completion \\\n    vim \\\n    epel-release \\\n    && dnf install -y \\\n    screen \\\n    bind-utils \\\n    && dnf clean all\n\n# Setup SSH\nRUN sed -i -e \'s|#PermitRootLogin yes|PermitRootLogin yes|g\' \\\n    -e \'s|#Port 22|Port 2200|g\' \\\n    -e \'s|#UseDNS yes|UseDNS no|g\' /etc/ssh/sshd_config \\\n    && echo "StrictHostKeyChecking no" >> /etc/ssh/ssh_config \\\n    && echo "root:cluster" | chpasswd \\\n    && rm -rf /root/.ssh \\\n    && mv /xcatdata /xcatdata.NEEDINIT\n\n# Enable services\nRUN systemctl enable httpd \\\n    && systemctl enable sshd \\\n    && systemctl enable dhcpd \\\n    && systemctl enable rsyslog \\\n    && systemctl enable xcatd\n\n# Copy our edited genimage\nCOPY ./opt/xcat/share/xcat/netboot/rh/genimage /opt/xcat/share/xcat/netboot/rh/genimage\n\nCOPY entrypoint.sh /entrypoint.sh\nRUN chmod +x /entrypoint.sh\n\nCOPY startup.sh /startup.sh\nRUN chmod +x /startup.sh\n\nENV XCATROOT /opt/xcat\nENV PATH="$XCATROOT/bin:$XCATROOT/sbin:$XCATROOT/share/xcat/tools:$PATH" MANPATH="$XCATROOT/share/man:$MANPATH"\nVOLUME [ "/xcatdata", "/var/log/xcat" ]\n\nEXPOSE 3001/tcp 3001/udp \\\n  3002/tcp 3002/udp \\\n  7/udp \\\n  873/tcp 873/udp \\\n  53/tcp 53/udp \\\n  67/tcp 67/udp \\\n  68/tcp 68/udp \\\n  69/tcp 69/udp \\\n  111/udp \\\n  514/tcp 514/udp \\\n  4011/tcp \\\n  623/tcp 623/udp \\\n  2200/udp\n\nCMD [ "/startup.sh" ]\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"EXPOSE")," declares which ports must be open for xCAT to be fully functional."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"VOLUME")," declares which volumes need to be persistent."),(0,r.kt)("p",null,"Other volumes can be mounted as read-only configurations. For example, since\nwe are running ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd"),", we need to mount the ",(0,r.kt)("inlineCode",{parentName:"p"},"/sys/fs/cgroup")," directory."),(0,r.kt)("p",null,"The entry point:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="statup.sh"',title:'"statup.sh"'},"#!/bin/bash\n\nsetsid ./entrypoint.sh &\n\nexec /sbin/init\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="entrypoint.sh"',title:'"entrypoint.sh"'},'#!/bin/bash\nis_ubuntu=$(test -f /etc/debian_version && echo Y)\n[[ -z ${is_ubuntu} ]] && logadm="root:" || logadm="syslog:adm"\nchown -R ${logadm} /var/log/xcat/\n. /etc/profile.d/xcat.sh\nps -ax\nif [[ -d "/xcatdata.NEEDINIT" ]]; then\n    echo "initializing xCAT ..."\n    if [ ! -f "/xcatdata/.init-finished" ]; then\n        echo "first initalization, copying template..."\n        rsync -a /xcatdata.NEEDINIT/ /xcatdata\n\n        echo "initalizing database."\n        xcatconfig --database\n\n        touch /xcatdata/.init-finished\n    fi\n\n    echo "initializing networks table if necessary..."\n    xcatconfig --updateinstall\n    XCATBYPASS=1 tabdump site | grep domain || XCATBYPASS=1 chtab key=domain site.value=example.com\n\n    if ! [ -L /root/.xcat ]; then\n        if ! [ -d /xcatdata/.xcat ]; then\n            echo "backup data not found, regenerating certificates and copying..."\n            xcatconfig -c\n            rsync -a /root/.xcat/* /xcatdata/.xcat\n        fi\n        echo "create symbol link for /root/.xcat..."\n        rm -rf /root/.xcat/\n        ln -sf -t /root /xcatdata/.xcat\n    fi\n\n    if [ -d /xcatdata/.ssh ]; then\n        echo "copy backup keys in /root/.ssh..."\n        rsync -a /xcatdata/.ssh/ /root/.ssh/\n        chmod 600 /root/.ssh/*\n    else\n        echo "backup keys not found, copying keys to /xcatdata/.ssh..."\n        xcatconfig --sshkeys\n        mkdir -p /xcatdata/.ssh\n        rsync -a /root/.ssh/ /xcatdata/.ssh/\n        chmod 600 /xcatdata/.ssh/*\n    fi\n\n    echo "reconfiguring hosts..."\n    makehosts\n    echo "reconfiguring dns..."\n    makedns\n    echo "reconfiguring dhcpd config..."\n    makedhcp -n\n    echo "reconfiguring dhcpd leases..."\n    makedhcp -a\n\n    echo "initializing loop devices..."\n    # workaround for no loop device could be used by copycds\n    for i in {0..7}; do\n        test -b /dev/loop$i || mknod /dev/loop$i -m0660 b 7 $i\n    done\n    # workaround for missing `switch_macmap` (#13)\n    ln -sf /opt/xcat/bin/xcatclient /opt/xcat/probe/subcmds/bin/switchprobe\n    mv /xcatdata.NEEDINIT /xcatdata.orig\nfi\n\ncat /etc/motd\nHOSTIPS=$(ip -o -4 addr show up | grep -v "\\<lo\\>" | xargs -I{} expr {} : ".*inet \\([0-9.]*\\).*")\necho "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"\necho "welcome to Dockerized xCAT, please login with"\n[[ -n "$HOSTIPS" ]] && for i in $HOSTIPS; do echo "   ssh root@$i -p 2200  "; done && echo "The initial password is \\"cluster\\""\necho "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"\n\nsystemctl start xcatd\n#exec /sbin/init\nrm -f /etc/nologin /var/run/nologin\n')),(0,r.kt)("h2",{id:"2-testing-the-application-with-podman"},"2. Testing the application with Podman"),(0,r.kt)("p",null,"Podman is an alternative to Docker. The main difference is that Podman is daemon-less."),(0,r.kt)("p",null,"We will focus on one specific feature which is ",(0,r.kt)("inlineCode",{parentName:"p"},"podman-play-kube"),"."),(0,r.kt)("p",null,"While you might test the container with Docker with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," or with ",(0,r.kt)("inlineCode",{parentName:"p"},"Minikube"),", Podman offers the almost same experience as a Kubernetes Cluster without being overkill."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"podman-play-kube")," only supports ",(0,r.kt)("inlineCode",{parentName:"p"},"Pod"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentVolumeClaim")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigMap"),", but that's enough since it bridges the gap between ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," and the Kubernetes syntax."),(0,r.kt)("p",null,"Let's write a ",(0,r.kt)("inlineCode",{parentName:"p"},"Pod")," for xCAT:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pod.yaml"',title:'"pod.yaml"'},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: 'xcat'\n  namespace: default\n  labels:\n    app: 'xcat'\nspec:\n  hostNetwork: true\n  containers:\n    - name: xcat\n      image: 'xcat:latest'\n      imagePullPolicy: Never\n      securityContext:\n        capabilities:\n          add:\n            - CAP_SYS_ADMIN\n            - NET_ADMIN\n        readOnlyRootFilesystem: false\n        runAsNonRoot: false\n        runAsUser: 0\n      resources:\n        limits:\n          cpu: 200m\n          memory: 500Mi\n        requests:\n          cpu: 100m\n          memory: 200Mi\n      ports:\n        - name: xcatdport-tcp\n          containerPort: 3001\n          protocol: TCP\n        - name: xcatdport-udp\n          containerPort: 3001\n          protocol: UDP\n        - name: xcatiport-tcp\n          containerPort: 3002\n          protocol: TCP\n        - name: xcatiport-udp\n          containerPort: 3002\n          protocol: UDP\n        - name: echo-udp\n          containerPort: 7\n          protocol: UDP\n        - name: rsync-tcp\n          containerPort: 873\n          protocol: TCP\n        - name: rsync-udp\n          containerPort: 873\n          protocol: UDP\n        - name: domain-tcp\n          containerPort: 53\n          protocol: TCP\n        - name: domain-udp\n          containerPort: 53\n          protocol: UDP\n        - name: bootps\n          containerPort: 67\n          protocol: UDP\n        - name: dhcp\n          containerPort: 67\n          protocol: TCP\n        - name: dhcpc\n          containerPort: 68\n          protocol: TCP\n        - name: bootpc\n          containerPort: 68\n          protocol: UDP\n        - name: tftp-tcp\n          containerPort: 69\n          protocol: TCP\n        - name: tftp-udp\n          containerPort: 69\n          protocol: UDP\n        - name: www-tcp\n          containerPort: 80\n          protocol: TCP\n        - name: www-udp\n          containerPort: 80\n          protocol: UDP\n        - name: sunrpc-udp\n          containerPort: 111\n          protocol: UDP\n        - name: rsyslogd-tcp\n          containerPort: 514\n          protocol: TCP\n        - name: rsyslogd-udp\n          containerPort: 514\n          protocol: UDP\n        - name: pxe\n          containerPort: 4011\n          protocol: TCP\n        - name: ipmi-tcp\n          containerPort: 623\n          protocol: TCP\n        - name: ipmi-udp\n          containerPort: 623\n          protocol: UDP\n        - name: ssh-tcp\n          containerPort: 2200\n          protocol: TCP\n        - name: ssh-udp\n          containerPort: 2200\n          protocol: UDP\n      volumeMounts:\n        - name: xcatdata\n          mountPath: /xcatdata\n        - name: cgroup\n          mountPath: /sys/fs/cgroup\n          readOnly: true\n        - name: varlogxcat\n          mountPath: /var/log/xcat\n        - mountPath: /tmp\n          name: tmp\n          subPath: tmp\n        - mountPath: /run\n          name: tmp\n          subPath: run\n        - mountPath: /run/lock\n          name: tmp\n          subPath: run-lock\n  volumes:\n    - name: tmp\n      hostPath:\n        path: ./tmp\n    - name: varlogxcat\n      hostPath:\n        path: ./logs\n    - name: xcatdata\n      hostPath:\n        path: ./xcat\n    - name: cgroup\n      hostPath:\n        path: /sys/fs/cgroup\n        type: Directory\n  restartPolicy: Always\n")),(0,r.kt)("p",null,"If we were to write a ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),", we would open the same port, mount the same volumes and add the same capabilities."),(0,r.kt)("p",null,"The main advantage is that if it works with podman, it will certainly work with Kubernetes."),(0,r.kt)("p",null,"One main disadvantage is that ",(0,r.kt)("inlineCode",{parentName:"p"},"podman-play-kube")," doesn't support the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"networks")," (which means no support for macvlan and ipvlan). The issue is tracked ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/issues/12965"},"here"),"."),(0,r.kt)("h2",{id:"3-writing-a-helm-application"},"3. Writing a Helm application"),(0,r.kt)("p",null,"Although it is not necessary to write a Helm application, some values may be redundant or must be abstracted."),(0,r.kt)("p",null,"That's why we prefer to write Helm Charts instead of Kustomize. If the application is light enough, we can use Kustomize instead."),(0,r.kt)("p",null,"To write a Helm application, we need to generalize the values (by using\n",(0,r.kt)("inlineCode",{parentName:"p"},"example.com"),' as domain for example). The "overlay" values will be stored\neither inside a Git repository, more precisely, inside a fork.'),(0,r.kt)("p",null,"The Helm application must be available on a publicly accessible Git or Helm repository."),(0,r.kt)("p",null,"The example for xCAT is stored inside ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory-CE/tree/main/helm/xcat"},(0,r.kt)("inlineCode",{parentName:"a"},"helm/xcat")),"."),(0,r.kt)("h2",{id:"4-writing-the-argo-cd-application-and-custom-values"},"4. Writing the Argo CD Application and custom values"),(0,r.kt)("p",null,"After writing the Helm Chart, you can write the Argo CD ",(0,r.kt)("inlineCode",{parentName:"p"},"Application"),"."),(0,r.kt)("p",null,"The example for xCAT is stored inside ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory-CE/blob/main/argo.example/provisioning/apps/xcat-app.yml"},(0,r.kt)("inlineCode",{parentName:"a"},"argo/provisioning/apps")),"."),(0,r.kt)("p",null,"The custom values are stored inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm/xcat")," directory. If the Helm application is not a Git repository, it's better to use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/argoproj/argocd-example-apps/blob/master/helm-dependency/README.md"},"subchart pattern by using helm dependencies"),"."),(0,r.kt)("h2",{id:"5-testing-on-the-kubernetes-cluster"},"5. Testing on the Kubernetes cluster"),(0,r.kt)("p",null,"Our favorite software for debugging is ",(0,r.kt)("a",{parentName:"p",href:"https://k8slens.dev"},"Lens"),"."),(0,r.kt)("p",null,"If you have deployed Prometheus, we can see the CPU and Memory usage of the container."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220517160622884",src:n(8299).Z,width:"731",height:"411"})))}m.isMDXComponent=!0},8299:function(e,t,n){t.Z=n.p+"assets/images/image-20220517160622884-d91596a74f08549557d24cd1d412f011.png"}}]);