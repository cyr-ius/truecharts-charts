{{- define "cert-manager-webhook-pdns.persistence" -}}
persistence:
  certs:
    enabled: true
    type: secret
    objectName: {{ include "cert-manager-webhook-pdns.servingCertificate" . }}
    optional: false
    targetSelector:
      certs:
        certs:
          mountPath: /tls
          readOnly: true
{{- end -}}
