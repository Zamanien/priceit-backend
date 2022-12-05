import { ItemFacebook } from '../types/itemFacebook';
export function createFacebookItems(data: any){
    var itemList: ItemFacebook[] = [];
    for (const edge of data.data.marketplace_search.feed_units.edges) {
      if (edge.node) {
        // console.log( edge.node.listing.formatted_price.text.slice(3))
        const product: ItemFacebook = {
          id: edge.node.listing.id,
          title: edge.node.listing.marketplace_listing_title,
          price: {
            value: parseInt(edge.node.listing.formatted_price.text.slice(3).replace(/,/g, '')),
            currency:edge.node.listing.formatted_price.text.slice(0,2)
          },
          image: {
            height: edge.node.listing.primary_listing_photo.image.height,
            width: edge.node.listing.primary_listing_photo.image.width,
            uri: edge.node.listing.primary_listing_photo.image.uri,
          },
          itemRef:edge.node.listing.share_uri
        };
        // console.log(itemList)
        itemList.push(product);
      }
    }
    return itemList;
  }