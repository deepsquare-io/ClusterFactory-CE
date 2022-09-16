region   = "GRA9"
ssh_keys = ["ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPd+X08wpIGwKZ0FsJu1nkR3o1CzlXF3OkgQd/WYB2fX nguyen@csquare"]
network  = "exo-connected-gcp"
gw       = "172.26.0.2"

k0s_instances = []

enable_storage = true
storage = {
  addresses      = "172.26.0.3"
  root_disk_size = 400
  server_name    = "nfs-server"
  flavor_name    = "standard.tiny"
  shares = [
    {
      path = "ldap-users"
    },
    {
      path  = "compute-nodes/enroot-cache"
      mode  = 775
      owner = "1501:1600"
    },
    {
      path  = "compute-nodes/jobs-logs"
      mode  = 775
      owner = "1501:1600"
    },
    {
      path  = "compute-nodes/experiments"
      mode  = 775
      owner = "1501:1600"
    },
    {
      path  = "compute-nodes/datasets-cache"
      mode  = 775
      owner = "1501:1600"
    },
    {
      path  = "compute-nodes/images"
      mode  = 775
      owner = "1501:1600"
    },
    {
      path  = "pyxis-cache"
      mode  = 775
      owner = "1501:1600"
    },
    {
      path = "k8s/slurmctl"
    },
    {
      path = "k8s/prometheus"
    },
    {
      path = "k8s/grafana"
    },
  ]
}

enable_router = true
router = {
  addresses      = "172.28.0.0/20"
  image_name     = "vyos-rolling-latest"
  bgp_asn        = 65009
  flavor_name    = "s1-2"
  ipsec_vpns     = []
  root_disk_size = 10
  server_name    = "vyos"
  wireguard_vpns = []
}
