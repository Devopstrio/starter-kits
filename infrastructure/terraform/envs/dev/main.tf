module "kit_db" {
  source = "./modules/database"

  db_name = "starter_kits_metadata"
}

module "template_cache" {
  source = "./modules/redis"

  cluster_mode = false
}

module "platform_monitoring" {
  source = "./modules/monitoring"

  retention_days = 90
}

resource "kubernetes_namespace" "platform_ops" {
  metadata {
    name = "starter-kits-engine"
    labels = {
      "platform.ops/managed" = "true"
    }
  }
}

resource "kubernetes_config_map" "kit_configs" {
  metadata {
    name      = "kit-global-configs"
    namespace = kubernetes_namespace.platform_ops.metadata[0].name
  }

  data = {
    "template-engine"      = "jinja2"
    "scaffold-mode"        = "dynamic"
    "governance-level"     = "strict"
    "upgrade-auto-patch"   = "true"
  }
}
