import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCakesService {

  constructor() { }

  getCakes() {
    return [
      {'id': 1,
       'name' : 'Banana cake with cream cheese',
        'flavour' : '["banana", "cream cheese"]',
      'url' : 'https://img.taste.com.au/mGtmQinI/taste/2016/11/top-50-cakes-image-1-66314-1.jpg'},

      {'id': 2,
       'name' : 'New York based cheesecake',
        'flavour' : '["cream cheese"]',
         'url' : 'https://img.taste.com.au/4XPFiEkj/taste/2016/11/top-50-cakes-image-2-66316-1.jpg'},

      {'id': 3,
       'name' : 'Chocolate coconut cake',
        'flavour' : '["chocolate", "coconut"]',
        'url' : 'https://img.taste.com.au/PHgEErSh/taste/2016/11/top-50-cakes-image-3-66317-1.jpg'},

      {'id': 4,
       'name' : 'Carrot and walnut cake',
        'flavour' : '["carrot", "walnut"]',
        'url' : 'https://img.taste.com.au/Dg8mhKFk/taste/2016/11/top-50-cakes-image-4-66318-1.jpg'},

      {'id': 5,
       'name' : 'Lemon yogurt cake with syrup',
        'flavour' : '["lemon", "yogurt]',
        'url' : 'https://img.taste.com.au/lEfWLYSZ/taste/2016/11/top-50-cakes-image-5-66319-1.jpg'},

      {'id': 6,
       'name' : 'Baked lemon cheesecake',
        'flavour' : '["lemon", "cheese"]',
        'url' : 'https://img.taste.com.au/VmPNf3LG/taste/2016/11/top-50-cakes-image-14-66332-1.jpg'}
      
    ]
  }
}
