"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[1535],{9613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5181:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(5443),a=t(3010),o=(t(9496),t(9613)),i=["components"],s={},l="3. K0s Configuration",c={unversionedId:"getting-started/k0s-configuration",id:"getting-started/k0s-configuration",title:"3. K0s Configuration",description:"Specifying the hosts",source:"@site/docs/getting-started/03-k0s-configuration.md",sourceDirName:"getting-started",slug:"/getting-started/k0s-configuration",permalink:"/docs/getting-started/k0s-configuration",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory-CE/tree/main/web/docs/getting-started/03-k0s-configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"docs",previous:{title:"2. Setting up your repository for GitOps",permalink:"/docs/getting-started/setting-up-repository"},next:{title:"4. Core Apps Deployment",permalink:"/docs/getting-started/core-apps-deployment"}},u={},p=[{value:"Specifying the hosts",id:"specifying-the-hosts",level:2},{value:"Configuring the k0s architecture",id:"configuring-the-k0s-architecture",level:2},{value:"Configuring MetalLB",id:"configuring-metallb",level:2},{value:"Configuring Traefik",id:"configuring-traefik",level:2},{value:"Initial Deployment",id:"initial-deployment",level:2}],d={toc:p};function m(e){var n=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"3-k0s-configuration"},"3. K0s Configuration"),(0,o.kt)("h2",{id:"specifying-the-hosts"},"Specifying the hosts"),(0,o.kt)("p",null,"Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"cfctl.yaml")," file. Start with the ",(0,o.kt)("inlineCode",{parentName:"p"},"hosts")," field :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=cfctl.yaml",title:"cfctl.yaml"},'apiVersion: cfctl.clusterfactory.io/v1beta1\nkind: Cluster\nmetadata:\n  name: k8s.example.com-cluster\nspec:\n  hosts:\n    - ssh:\n        address: 192.168.0.2\n        user: root\n        port: 22\n        keyPath: ~/.ssh/id_ed25519\n      role: controller+worker\n      noTaints: true\n      privateInterface: eno1\n      privateAddress: 192.168.0.2\n      installFlags:\n        - --debug\n        - --labels="topology.kubernetes.io/region=ch-sion,topology.kubernetes.io/zone=ch-sion-1"\n      hooks:\n        apply:\n          before:\n            # Set SELinux Permissive\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then sed -i s/^SELINUX=.*$/SELINUX=permissive/ /etc/selinux/config; fi\'\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then setenforce 0; fi\'\n\n  ...\n')),(0,o.kt)("p",null,"Provide each host with a valid IP address that is reachable by k0ctl, and the connection details for an SSH connection. Edit the labels for multi-zone usage."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/reference/cfctl.yaml"},"See ",(0,o.kt)("inlineCode",{parentName:"a"},"cfctl.yaml")," specification"),"."),(0,o.kt)("h2",{id:"configuring-the-k0s-architecture"},"Configuring the k0s architecture"),(0,o.kt)("p",null,"After you set the ",(0,o.kt)("inlineCode",{parentName:"p"},"hosts")," field, you must configure the k0s architecture by editing the ",(0,o.kt)("inlineCode",{parentName:"p"},"k0s")," field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="cfctl.yaml > spec > k0s"',title:'"cfctl.yaml',">":!0,spec:!0,'k0s"':!0},"k0s:\n  version: '1.23.8+k0s.0'\n  dynamicConfig: false\n  config:\n    apiVersion: k0s.k0sproject.io/v1beta1\n    kind: Cluster\n    metadata:\n      name: k8s.example.com\n    spec:\n      api:\n        k0sApiPort: 9443\n        port: 6443\n      installConfig:\n        users:\n          etcdUser: etcd\n          kineUser: kube-apiserver\n          konnectivityUser: konnectivity-server\n          kubeAPIserverUser: kube-apiserver\n          kubeSchedulerUser: kube-scheduler\n      konnectivity:\n        adminPort: 8133\n        agentPort: 8132\n      network:\n        calico:\n          mode: 'vxlan'\n          overlay: Always\n          mtu: 0\n          wireguard: false\n        kubeProxy:\n          disabled: false\n          mode: iptables\n        kuberouter:\n          autoMTU: true\n          mtu: 0\n          peerRouterASNs: ''\n          peerRouterIPs: ''\n        podCIDR: 10.244.0.0/16\n        provider: calico\n        serviceCIDR: 10.96.0.0/12\n      podSecurityPolicy:\n        defaultPolicy: 00-k0s-privileged\n      storage:\n        type: etcd\n      telemetry:\n        enabled: false\n")),(0,o.kt)("p",null,"Check the CIDR and make sure it doesn't conflict with any IP range of your network."),(0,o.kt)("p",null,"Again, ",(0,o.kt)("strong",{parentName:"p"},"you should read the specification carefully as the modification of one the k0s field won't be allowed in the future"),"."),(0,o.kt)("p",null,"If you wish to use a HA setup, please follow ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/maintenance/high-availability"},"this guide"),"."),(0,o.kt)("p",null,"After setting up k0s, you can change the ",(0,o.kt)("inlineCode",{parentName:"p"},"extensions")," field. This field can be changed at any time. You can add or change extensions. However, removing an extension is permanent."),(0,o.kt)("h2",{id:"configuring-metallb"},"Configuring MetalLB"),(0,o.kt)("p",null,"Start with ",(0,o.kt)("inlineCode",{parentName:"p"},"metallb"),". MetalLB is a L2/L3 load balancer designed for bare metal Kubernetes clusters. It exposes the kubernetes ",(0,o.kt)("inlineCode",{parentName:"p"},"Services")," to the external network. It uses either L2 (ARP) or BGP to advertise routes. The network indicated by ",(0,o.kt)("inlineCode",{parentName:"p"},"metallb")," must be outside the network when using BGP. Otherwise, when using L2 (ARP), the network must be the same as your private network. For multi-zone clusters, you MUST use BGP."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"metallb_concepts",src:t(3965).Z+"#white-bg",width:"860",height:"831"}))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'MetalLB 0.13.0 will allow you to create "zoned" L2 announcements, which means you can make ARP calls by zone.'),(0,o.kt)("p",{parentName:"div"},"More precisely, this means that you can allow ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.0.100")," in the network ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.0.0/24")," in one zone, and ",(0,o.kt)("inlineCode",{parentName:"p"},"172.24.0.100")," in the network ",(0,o.kt)("inlineCode",{parentName:"p"},"172.24.0.0/18")," in an another zone, which means that you wouldn't need BGP anymore."),(0,o.kt)("p",{parentName:"div"},"However, MetalLB 0.13.0 is not yet available at the time of writing, and BGP is a sure-fire."))),(0,o.kt)("p",null,"Your router must be capable of using BGP. If not, you should use an appliance with BGP capabilities (like OPNsense, OpenWRT, vyOS, or Linux with BIRD)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="cfctl.yaml > spec > k0s > spec > extensions > helm > charts[]"',title:'"cfctl.yaml',">":!0,spec:!0,k0s:!0,extensions:!0,helm:!0,'charts[]"':!0},"- name: metallb\n  chartname: bitnami/metallb\n  version: '3.0.10'\n  namespace: metallb\n  values: |\n\n    configInline:\n      peers:\n        - peer-address: 192.168.0.1\n          peer-asn: 65000\n          my-asn: 65001\n          source-address: 192.168.0.2\n          node-selectors:\n            - match-labels:\n                kubernetes.io/hostname: mn1.at1.example.com\n        - peer-address: 10.10.2.1\n          peer-asn: 65002\n          my-asn: 65001\n          source-address: 10.10.2.2\n          node-selectors:\n            - match-labels:\n                kubernetes.io/hostname: mn1.ch1.example.com\n\n      address-pools:\n        - name: main-pool\n          protocol: bgp\n          addresses:\n            - 192.168.1.100/32\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://metallb.universe.tf/configuration/#layer-2-configuration"},"Use L2 if you have only one zone"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="cfctl.yaml > spec > k0s > spec > extensions > helm > charts[]"',title:'"cfctl.yaml',">":!0,spec:!0,k0s:!0,extensions:!0,helm:!0,'charts[]"':!0},"- name: metallb\n  chartname: bitnami/metallb\n  version: '3.0.10'\n  namespace: metallb\n  values: |\n\n    configInline:\n      address-pools:\n        - name: main-pool\n          protocol: layer2\n          addresses:\n            - 192.168.1.100/32\n")),(0,o.kt)("h2",{id:"configuring-traefik"},"Configuring Traefik"),(0,o.kt)("p",null,"After configuring the Load Balancer, you should configure Traefik, the main Ingress and L7 load balancer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="cfctl.yaml > spec > k0s > spec > extensions > helm > charts[]"',title:'"cfctl.yaml',">":!0,spec:!0,k0s:!0,extensions:!0,helm:!0,'charts[]"':!0},"- name: traefik\n  chartname: traefik/traefik\n  version: '10.24.0'\n  namespace: traefik\n  values: |\n\n    ingressClass:\n      enabled: true\n      isDefaultClass: true\n\n    service:\n      enabled: true\n      annotations:\n        metallb.universe.tf/address-pool: main-pool\n        metallb.universe.tf/allow-shared-ip: traefik-lb-key\n      spec:\n        externalTrafficPolicy: Cluster\n        loadBalancerIP: 192.168.1.100\n\n    providers:\n      kubernetesCRD:\n        enabled: true\n        allowCrossNamespace: true\n        allowExternalNameServices: true\n        namespaces: []\n      kubernetesIngress:\n        enabled: true\n        allowExternalNameServices: true\n        namespaces: []\n        ingressClass: traefik\n        publishedService:\n          enabled: true\n\n    globalArguments:\n      - '--global.checknewversion'\n      - '--api.dashboard=true'\n\n    additionalArguments:\n      - '--entryPoints.websecure.proxyProtocol.insecure'\n      - '--entryPoints.websecure.forwardedHeaders.insecure'\n\n    ingressRoute:\n      dashboard:\n        enabled: false\n\n    ports:\n      traefik:\n        port: 9000\n        expose: false\n        exposedPort: 9000\n        protocol: TCP\n      dns-tcp:\n        port: 8053\n        expose: true\n        exposedPort: 53\n        protocol: TCP\n      dns-udp:\n        port: 8054\n        expose: true\n        exposedPort: 53\n        protocol: UDP\n      web:\n        port: 80\n        expose: true\n        exposedPort: 80\n        protocol: TCP\n      websecure:\n        port: 443\n        expose: true\n        exposedPort: 443\n        protocol: TCP\n        # NOTE: use cert-manager.\n        tls:\n          enabled: false\n      metrics:\n        port: 9100\n        expose: false\n        exposedPort: 9100\n        protocol: TCP\n\n    securityContext:\n      capabilities:\n        drop: [ALL]\n        add: [NET_BIND_SERVICE]\n      readOnlyRootFilesystem: true\n      runAsGroup: 0\n      runAsNonRoot: false\n      runAsUser: 0\n\n    podSecurityContext:\n      fsGroup: 65532\n")),(0,o.kt)("p",null,"Look for ",(0,o.kt)("inlineCode",{parentName:"p"},"loadBalancerIP")," and use the IPs from the MetalLB."),(0,o.kt)("p",null,"Add or remove ports. Since Traefik will be used as the main Ingress, these ports will be exposed to the external network."),(0,o.kt)("p",null,"The IngressClass is ",(0,o.kt)("inlineCode",{parentName:"p"},"traefik"),". If you don't want to use Traefik, feel free to add another extension."),(0,o.kt)("p",null,"We use Traefik because it can do a lot of complex route operations while still being able to do basic HTTP routing."),(0,o.kt)("h2",{id:"initial-deployment"},"Initial Deployment"),(0,o.kt)("p",null,"If you forgot to install the utilities, just run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory-CE"',title:'"user@local:/ClusterFactory-CE"'},". ./scripts/setup-env\n")),(0,o.kt)("p",null,"Deploy the cluster with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory-CE"',title:'"user@local:/ClusterFactory-CE"'},"# Deploy the cluster\ncfctl apply --debug --config ./cfctl.yaml\n\n# Fetch the kubeconfig\ncfctl kubeconfig --config ./cfctl.yaml >./kubeconfig\nchmod 600 ./kubeconfig\n")),(0,o.kt)("p",null,"You can store the kubeconfig inside ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),". Our recommendation is to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," environment variable to avoid mixing the Kubernetes contexts. Just like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory-CE"',title:'"user@local:/ClusterFactory-CE"'},"cfctl kubeconfig --config ./cfctl.yaml >./kubeconfig\nchmod 600 ./kubeconfig\n`export KUBECONFIG=$(pwd)/kubeconfig`.\n")),(0,o.kt)("p",null,"Just make sure to verify which configuration you are using with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl config current-context"),". You can add an alias to your favorite shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'alias kubectx="kubectl config current-context"\n')),(0,o.kt)("p",null,"Congratulation, you have deployed your Kubernetes cluster! However, it's still missing a few core features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"KubeVirt, to deploy VM workloads"),(0,o.kt)("li",{parentName:"ul"},"Multus CNI, to support multiple network interfaces"),(0,o.kt)("li",{parentName:"ul"},"Sealed Secrets, secret management optimized for GitOps"),(0,o.kt)("li",{parentName:"ul"},"Cert-manager issuers, to generate your SSL certificates and enable, for free, TLS configuration."),(0,o.kt)("li",{parentName:"ul"},"Argo CD, to enable GitOps."),(0,o.kt)("li",{parentName:"ul"},"CoreDNS configurations")))}m.isMDXComponent=!0},3965:function(e,n,t){n.Z=t.p+"assets/images/metallb_concepts-afe86a92b9fa058b25211ba9e095608d.png"}}]);