/**
 * @generated SignedSource<<f8acb43201fd57c8be74155df98f12f9>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import type { AddTodoMutation_user$fragmentType } from "./AddTodoMutation_user.graphql";
import type { MarkAllTodosMutation_todoEdge$fragmentType } from "./MarkAllTodosMutation_todoEdge.graphql";
import type { MarkAllTodosMutation_user$fragmentType } from "./MarkAllTodosMutation_user.graphql";
import type { TodoListFooter_todoConnection$fragmentType } from "./TodoListFooter_todoConnection.graphql";
import type { TodoListFooter_user$fragmentType } from "./TodoListFooter_user.graphql";
import type { Todo_todo$fragmentType } from "./Todo_todo.graphql";
import type { Todo_user$fragmentType } from "./Todo_user.graphql";
import type { FragmentType } from "relay-runtime";
declare export opaque type TodoList_user$fragmentType: FragmentType;
import type { refetch_todos$variables } from "./refetch_todos.graphql";
export type TodoList_user$data = {|
  +completedCount: number,
  +id: string,
  +todos: ?{|
    +__id: string,
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentSpreads: Todo_todo$fragmentType,
      |},
      +$fragmentSpreads: MarkAllTodosMutation_todoEdge$fragmentType,
    |}>,
    +$fragmentSpreads: TodoListFooter_todoConnection$fragmentType,
  |},
  +totalCount: number,
  +$fragmentSpreads: AddTodoMutation_user$fragmentType & MarkAllTodosMutation_user$fragmentType & TodoListFooter_user$fragmentType & Todo_user$fragmentType,
  +$fragmentType: TodoList_user$fragmentType,
|};
export type TodoList_user$key = {
  +$data?: TodoList_user$data,
  +$fragmentSpreads: TodoList_user$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = (function(){
var v0 = [
  "todos"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": 200,
      "kind": "LocalArgument",
      "name": "first"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./refetch_todos.graphql'),
      "identifierField": "id"
    }
  },
  "name": "TodoList_user",
  "selections": [
    {
      "alias": "todos",
      "args": null,
      "concreteType": "TodoConnection",
      "kind": "LinkedField",
      "name": "__TodoList_todos_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TodoEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Todo",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Todo_todo"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "MarkAllTodosMutation_todoEdge"
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "TodoListFooter_todoConnection"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "ClientExtension",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__id",
              "storageKey": null
            }
          ]
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "completedCount",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AddTodoMutation_user"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MarkAllTodosMutation_user"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Todo_user"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TodoListFooter_user"
    },
    (v1/*: any*/)
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node/*: any*/).hash = "f6fc0424f17642e4e8ddf1bc0c6e0686";

module.exports = ((node/*: any*/)/*: RefetchableFragment<
  TodoList_user$fragmentType,
  TodoList_user$data,
  refetch_todos$variables,
>*/);
