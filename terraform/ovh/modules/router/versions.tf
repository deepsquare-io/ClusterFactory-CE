terraform {
  required_version = ">= 1.3.0"
  required_providers {
    openstack = {
      source  = "terraform-provider-openstack/openstack"
      version = "~> 1.49.0"
    }
    cidr = {
      source  = "volcano-coffee-company/cidr"
      version = "0.1.0"
    }
    ovh = {
      source  = "ovh/ovh"
      version = "0.22.0"
    }
  }
}
