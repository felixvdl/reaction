/**
 * Pages that the user can view.
 */
export enum PageName {
  ArtistPage = "Artist",
}

/**
 * An entity in the data model that has an ownership relationship to the entity
 * being described, be it a straightforward model such as ‘Artist’ or a more
 * conceptual one like a ‘Consignment Submission’
 *
 * @see {Result.owner}
 * @see {PageView.owner}
 */
export enum OwnerType {
  Artist = "Artist",
  Artwork = "Artwork",
  Conversation = "Conversation",
  Gene = "Gene",
  Show = "Show",
  Invoice = "Invoice",
  Consignment = "ConsignmentSubmission",
}

/**
 * User actions, which can be active or passive ones.
 *
 * TODO: Distinguishin between Click and Tap is a little confusing. Do we always
 *       use Click on Force or do we use Tap when browsing from a mobile device?
 */
export enum ActionType {
  /**
   * A click on a UI element using a mouse-like input device.
   *
   * TODO: Check if ‘Tap’ and this can be combined.
   */
  Click = "Click",

  /**
   * A tap on a UI element using a finger-like input device.
   *
   * TODO: Check if ‘Click’ and this can be combined.
   */
  Tap = "Tap",

  /**
   * Moving the mouse pointer over a UI element or, when browsing on a mobile
   * device, by first tapping the UI element once making it switch into
   * continuous hover mode.
   */
  Hover = "Hover",
}

/**
 * The identifier that ties an interaction to a result.
 */
export enum ActionName {
  /**
   * Artist Page
   */
  ArtistFollow = "artistFollow",
  ArtistUnfollow = "artistUnfollow",

  /**
   * Gene Page
   */
  GeneFollow = "geneFollow",
  GeneUnfollow = "geneUnfollow",

  /**
   * Home page events
   */
  HomeArtistRailFollow = "homeArtistRailFollow",
  HomeArtistArtworksBlockFollow = "homeArtistArtworksBlockFollow",

  /**
   * Conversations / Inbox / Messaging
   */
  ConversationSendReply = "conversationSendReply",
  ConversationLink = "conversationLinkUsed",
  InquiryCancel = "inquiryCancel",
  InquirySend = "inquirySend",

  /**
   *  Saves And Follows Events
   */
  SavesAndFollowsWorks = "savesAndFollowsWorks",
  SavesAndFollowsArtists = "savesAndFollowsArtists",
  SavesAndFollowsCategories = "savesAndFollowsCategories",

  /**
   *  Consignment flow
   */
  ConsignmentDraftCreated = "consignmentDraftCreated",
  ConsignmentSubmitted = "consignmentSubmitted",
  ConsignmentInterest = "Interested in selling a work learn more", // TODO: Old schema

  /**
   * Bid flow
   */
  BidFlowAddBillingAddress = "addBillingAddress",
  BidFlowPlaceBid = "placeBid",
  BidFlowSaveBillingAddress = "saveBillingAddress",

  /**
   * Generic
   */
  ReadMoreExpanded = "readMoreExpanded", // TODO: This differs from old event
  InSale = "In current auction", // TODO: Old schema
  InShow = "In featured show", // TODO: Old schema
}
