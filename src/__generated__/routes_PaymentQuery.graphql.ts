/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type routes_PaymentQueryVariables = {
    readonly orderID: string;
};
export type routes_PaymentQueryResponse = {
    readonly order: ({}) | null;
};



/*
query routes_PaymentQuery(
  $orderID: String!
) {
  order(id: $orderID) {
    ...Payment_order
    __id: id
  }
}

fragment Payment_order on Order {
  id
  __id: id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "orderID",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "orderID",
    "type": "String!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": "__id",
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "routes_PaymentQuery",
  "id": null,
  "text": "query routes_PaymentQuery(\n  $orderID: String!\n) {\n  order(id: $orderID) {\n    ...Payment_order\n    __id: id\n  }\n}\n\nfragment Payment_order on Order {\n  id\n  __id: id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "routes_PaymentQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "order",
        "storageKey": null,
        "args": v1,
        "concreteType": "Order",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Payment_order",
            "args": null
          },
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "routes_PaymentQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "order",
        "storageKey": null,
        "args": v1,
        "concreteType": "Order",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          v2
        ]
      }
    ]
  }
};
})();
(node as any).hash = '4ecce8cd32d5a28bb2c0167757eac4fd';
export default node;
