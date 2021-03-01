<div id="select-carrier-modal" class="modal fade" tabindex="-1" role="dialogaria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="{l s='Close' mod='costo_envio'}">
                    <span aria-hidden="true"><i class="material-icons">close</i></span>
                </button>
                <h4 class="modal-title h6 text-sm-center" id="myModalLabel">{l s='Calculate Shipping' mod='costo_envio'}</h4>
            </div>
            <div class="modal-body">
                <div class="text-sm-center">
                    <form
                        class="clearfix"
                        id="js-delivery"
                        data-url-update="{url entity='order' params=['ajax' => 1, 'action' => 'selectDeliveryOptionCart']}"
                        method="post"
                    >
                        <select name="delivery_option[{$id_address}]" id="opciones" class="custom-select sources" placeholder="{l s='Select your Address' mod='costo_envio'}">
                            {foreach from=$delivery_options item=carrier key=carrier_id}
                                <option id="delivery_option_{$carrier.id}" value="{$carrier_id}" {if $delivery_option == $carrier_id} selected{/if} {if $carrier.name == 'Por calcular'} style="display: none"{/if}>{$carrier.name}</option>
                            {/foreach}
                        </select>
                    </form>
                </div>
                {block name='shipping_cost'}
                  {include file='checkout/_partials/cart-detailed-totals.tpl' cart=$cart}
                {/block}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary btn-lg" data-dismiss="modal">{l s='Continue' mod='costo_envio'}</button>
            </div>
        </div>
    </div>
</div>