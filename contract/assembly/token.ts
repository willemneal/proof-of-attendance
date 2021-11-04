import {
  TokenMetadata,  
} from "./metadata";

import {
  TokenId,
  AccountId,
} from "./types";


@nearBindgen
export class Token {
  owner_id: AccountId;
  approved_account_ids: Map<AccountId, i32>;
  next_approval_id: i64;
  metadata: TokenMetadata;
  
  constructor(
    owner_id: AccountId,
    approved_account_ids: Map<AccountId, i32>,
    next_approval_id: i64,
    metadata: TokenMetadata | null
  ) {
      this.owner_id = owner_id;
      this.approved_account_ids = approved_account_ids;
      this.next_approval_id = next_approval_id;
      this.metadata = metadata as TokenMetadata;
    }
}

@nearBindgen
export class JsonToken {
  token_id: TokenId;
  owner_id: AccountId;
  metadata: TokenMetadata;

  
  constructor(
    token_id: TokenId | null,
    owner_id: AccountId | null,
    metadata: TokenMetadata | null,
    public approved_account_id: Map<AccountId, i32>
  ) {
    // Currently have to trick the encoder by casting to string.
    this.token_id = token_id as TokenId;
    this.owner_id = owner_id as AccountId;
    this.metadata = metadata as TokenMetadata;
    approved_account_id = approved_account_id;
  }
}