<template>
  <div class="center">
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th>
            Adresse
          </vs-th>
          <vs-th>
            Propriétaire
          </vs-th>
          <vs-th>
            Nombre de locataires
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
            v-for="property in tableData.properties"
            :key="property.id"
        >
          <vs-td>
            {{ buildFullAddress(property) }}
          </vs-td>
          <vs-td>
            {{ getOwner(property).name }}
          </vs-td>
          <vs-td>
            {{ getNumberOfTenants(property) }}
          </vs-td>

          <template #expand>
            <div class="con-content">
              <vs-table>
                <template #tbody>
                  <vs-tr
                      v-for="tenant in filterTenants(property)"
                      :key="tenant.id"
                  >
                    <vs-td>
                      {{ tenant.name }}
                    </vs-td>
                    <vs-button flat icon>
                      Générer quittance
                    </vs-button>
                    <vs-button border danger>
                      Supprimer
                    </vs-button>
                  </vs-tr>
                </template>
              </vs-table>
            </div>
          </template>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
import { data, addressUtilsFunction } from '../shared';

export default {
  name: 'MainList',
  data() {
    return {
      tableData: data,
    }
  },
  methods: {
    buildFullAddress(property) {
      return addressUtilsFunction.buildFullAddress(property.address1, property.address2, property.postalCode, property.city);
    },
    filterTenants(property) {
      return data.tenants.filter(tenant => tenant.rentId === property.id)
    },
    getNumberOfTenants(property) {
      return this.filterTenants(property).length
    },
    getOwner(property) {
      return data.owners.filter(owner => owner.id === property.ownerId)[0]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
