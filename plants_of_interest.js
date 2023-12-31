const plantsOfInterest = [
	{
		'name': "Polystichum arostichoides",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Anemone canadensis",
 		'flower': 'white', 
 		'bloom': 'april / june', 
 		'height': '1-2', 
 		'width': '2-3', 
 		'preference': 'full sun / part shade' 
 	},
	{
		'name': "Amelanchier x grandiflora 'Autumn Brilliance'",
		'flower': 'white',
		'bloom': 'april',
		'height': '15-25',
		'width': '15-25',
		'preference': 'full sun / part shade'
	},
	{
		'name': "Asarum europaeum",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Amsonia hubrichtii",
 		'flower': 'blue', 
 		'bloom': 'april / may', 
 		'height': '2-3', 
 		'width': '2-3', 
 		'preference': 'full sun / part shade' 
 	},
	{
		'name': "Anemone x hybrida 'honorine Jobert'",
 		'flower': 'white', 
 		'bloom': 'august / september', 
 		'height': '3-4', 
 		'width': '1-2', 
 		'preference': 'full sun / part shade' 
 	},
	{
		'name': "Artemisia 'Silver King'",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Aruncus dioicus",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Asclepias purpurascens",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Asclepias tuberosa",
 		'flower': 'orange', 
 		'bloom': 'june / august', 
 		'height': '1-3', 
 		'width': '1-2', 
 		'preference': 'full sun' 
 	},
	{
		'name': "Actaea racemosa",
 		'flower': 'white', 
 		'bloom': 'june / july', 
 		'height': '4-6', 
 		'width': '2-4', 
 		'preference': 'part shade / full shade' 
 	},
	{
		'name': "Baptisia australis",
 		'flower': 'blue', 
 		'bloom': 'may / june', 
 		'height': '3-4', 
 		'width': '3-4', 
 		'preference': 'full sun / part shade' 
 	},
	{
		'name': "Baptista alba",
 		'flower': 'white', 
 		'bloom': 'april / may', 
 		'height': '2-4', 
 		'width': '2-3', 
 		'preference': 'full sun / part shade' 
 	},
	{
		'name': "Berginia 'Winter Glow'",
 		'flower': 'magenta', 
 		'bloom': 'april / may', 
 		'height': '1-2', 
 		'width': '1-2', 
 		'preference': 'part shade / full shade' 
 	},
	{
		'name': "Calycanthus floridus",
		'flower': "red",
		'bloom': 'may / june',
		'height': '6-10',
		'width': '6-12',
		'preference': 'full sun / part shade'
	},
	{
		'name': "Coreopsis plamata",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Coreopsis lanceolata",
 		'flower': 'yellow', 
 		'bloom': 'may / july', 
 		'height': '1-2', 
 		'width': '1-2', 
 		'preference': 'full sun' 
 	},
	{
		'name': "Callirhoe involucrata",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Campanula rotundifolia",
 		'flower': 'blue', 
 		'bloom': 'june / september', 
 		'height': '1', 
 		'width': '1', 
 		'preference': 'full sun / part shade' 
 	},
	{
		'name': "Convallaria majalis",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Chelone 'Hotlips'",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Dianthus carthusianorum",
 		'flower': 'pink', 
 		'bloom': 'june / september', 
 		'height': '2-3', 
 		'width': '1-2', 
 		'preference': 'full sun' 
 	},
	{
		'name': "Dicentra spectibilis",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Eryngium 'Blue Star'",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Echinops ritro",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Eurybia divaricatus",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Eustoma exaltatum ssp. russellianum",
		'flower': '',
		'bloom': '',
		'height': '',
		'width': '',
		'preference': ''
	},
	{
		'name': "Echinacea 'Harvest Moon'",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Euphorbia corollata",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Echinacea 'Tiki Torch'",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Echinacea pallida",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Eupatorium purpureum",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Echinacea 'Pixie Meadowbrite'",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Eryngium yuccifolium",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Geranium Spessart",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Geranium sanguineum Max Frei",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Gillenia trifoliata",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Heliopsis 'Sommersonne'",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Helleborus foetidus",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Helleborus x hybridus",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Hosta plantaginea elegans",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Helianthus 'Lemon Queen'",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Helianthus mollis",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Liatris aspera",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Lychnis chalcedonica",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Liriope spicata",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Origanum vulgare",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Persicaria 'Firetail'",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Phlox pilosa",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Petalostemum purpureum",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Rudbeckia maxima",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Solidago caesia",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Symphoricarpos orbiculatus",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Symphytotrichum cordifolium",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Stachys 'Hummelo'",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Spiraea tomentosa",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Solidago juncea",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Sanguisorba menziesii",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Symphytotrichum oolentangiense",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Siliphium terebinthinaceum",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Scabiosa columbaria 'Butterfly Blue'",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Packera obovata",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Thalictrum dasycarpum",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Tellima grandiflora",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Verbena bonariensis",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Vinca minor 'Bowles'",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Verbascum nigrum 'Album'",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Verbascum bombyciferum",
		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': ''
	},
	{
		'name': "Xanthorhyza simplicissima",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Bouteloua curtipendula",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Carex albicans",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Carex eburnea",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Carex muskingumensis",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Carex pennsylvanica",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Eragrostis spectibilis",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Hystrix patula",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Pennisetum 'Karley Rose'",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Sporobolis heterolepsis",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	},
	{
		'name': "Schizachyrium scoparium 'Jazz'",
 		'flower': '', 
 		'bloom': '', 
 		'height': '', 
 		'width': '', 
 		'preference': '' 
 	}
] 
