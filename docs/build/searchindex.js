Search.setIndex({envversion:50,filenames:["LICENSE","index","quetzal","quetzal.analysis","quetzal.analysis.analysis","quetzal.analysis.cost_benefit_analysis","quetzal.analysis.on_demand","quetzal.engine","quetzal.engine.add_network","quetzal.engine.connectivity","quetzal.engine.engine","quetzal.engine.linearsolver_utils","quetzal.engine.pathfinder","quetzal.engine.screenlines","quetzal.io","quetzal.io.display","quetzal.io.export","quetzal.io.export_utils","quetzal.io.gtfs_importer","quetzal.io.importer","quetzal.model","quetzal.model.analysismodel","quetzal.model.cubemodel","quetzal.model.docmodel","quetzal.model.integritymodel","quetzal.model.model","quetzal.model.preparationmodel","quetzal.model.stepmodel","quetzal.model.transportmodel"],objects:{"":{quetzal:[2,0,0,"-"]},"quetzal.analysis":{analysis:[4,0,0,"-"],cost_benefit_analysis:[5,0,0,"-"],on_demand:[6,0,0,"-"]},"quetzal.analysis.analysis":{analysis_od_matrix:[4,1,1,""],analysis_path:[4,1,1,""],analysis_tp_summary:[4,1,1,""],economic_series:[4,1,1,""],path_analysis_od_matrix:[4,1,1,""],tp_summary:[4,1,1,""],volume_analysis_od_matrix:[4,1,1,""]},"quetzal.analysis.cost_benefit_analysis":{od_weighted_time_delta:[5,1,1,""]},"quetzal.analysis.on_demand":{checkpoint_demand:[6,1,1,""],node_path:[6,1,1,""],select:[6,1,1,""]},"quetzal.engine":{add_network:[8,0,0,"-"],connectivity:[9,0,0,"-"],engine:[10,0,0,"-"],linearsolver_utils:[11,0,0,"-"],pathfinder:[12,0,0,"-"],screenlines:[13,0,0,"-"]},"quetzal.engine.add_network":{NetworkCaster:[8,2,1,""],build_node_dict:[8,1,1,""],find_node_path:[8,1,1,""],link_road_nodes:[8,1,1,""],node_join_dataframe:[8,1,1,""],road_dataframe:[8,1,1,""]},"quetzal.engine.add_network.NetworkCaster":{add_road_nodes:[8,3,1,""],build:[8,3,1,""],build_nearest_neighbors:[8,3,1,""],build_road_access:[8,3,1,""],build_road_dataframe:[8,3,1,""],dumb_cast:[8,3,1,""]},"quetzal.engine.connectivity":{build_footpaths:[9,1,1,""],centroid_and_links:[9,1,1,""],geo_join_method:[9,1,1,""],node_clustering:[9,1,1,""],parenthood_geometry:[9,1,1,""],voronoi_graph_and_tesselation:[9,1,1,""]},"quetzal.engine.engine":{aggregate_shares:[10,1,1,""],attraction_share_pt:[10,1,1,""],emission_share_pt:[10,1,1,""],graph_links:[10,1,1,""],loaded_links_and_nodes:[10,1,1,""],modal_split_from_volumes_and_los:[10,1,1,""],multimodal_graph:[10,1,1,""],ntlegs_from_centroids_and_nodes:[10,1,1,""],od_volume_from_zones:[10,1,1,""],path_and_duration_from_links_and_ntlegs:[10,1,1,""]},"quetzal.engine.linearsolver_utils":{build_constraints:[11,1,1,""],build_indicator:[11,1,1,""],extrapolate:[11,1,1,""],linearsolver:[11,1,1,""],reduce_indicator:[11,1,1,""]},"quetzal.engine.pathfinder":{PublicPathFinder:[12,2,1,""],graph_from_links_and_ntlegs:[12,1,1,""],path_and_duration_from_graph:[12,1,1,""]},"quetzal.engine.pathfinder.PublicPathFinder":{broken_mode_graph:[12,3,1,""],broken_route_graphs:[12,3,1,""],build_mode_braker:[12,3,1,""],build_mode_combinations:[12,3,1,""],build_route_braker:[12,3,1,""],build_route_zones:[12,3,1,""],find_best_path:[12,3,1,""],find_best_paths:[12,3,1,""],find_broken_mode_paths:[12,3,1,""],find_broken_route_paths:[12,3,1,""],first_link:[12,3,1,""],last_link:[12,3,1,""]},"quetzal.engine.screenlines":{direct:[13,1,1,""],intersection_flow:[13,1,1,""],intersection_flows:[13,1,1,""]},"quetzal.io":{"export":[16,0,0,"-"],display:[15,0,0,"-"],export_utils:[17,0,0,"-"],gtfs_importer:[18,0,0,"-"],importer:[19,0,0,"-"]},"quetzal.io.display":{all_pt_paths:[15,1,1,""],car_path:[15,1,1,""],longlat:[15,1,1,""],one_pt_path:[15,1,1,""],path:[15,1,1,""],pt_path:[15,1,1,""]},"quetzal.io.export":{aggregation_summary:[16,1,1,""],assigned_links_nodes_to_shp:[16,1,1,""],assigned_nodes_to_shp:[16,1,1,""],build_lines:[16,1,1,""],create_load_legend:[16,1,1,""],lines_to_shp:[16,1,1,""],loaded_links_to_shp:[16,1,1,""],ntlegs_centroids_to_shp:[16,1,1,""],save_boardings_by_length_by_line:[16,1,1,""],save_boardings_by_line:[16,1,1,""],save_line_headway:[16,1,1,""],save_line_length:[16,1,1,""],save_line_load:[16,1,1,""],save_line_plots:[16,1,1,""],save_line_transfer:[16,1,1,""],save_line_travel_time:[16,1,1,""],save_passenger_km_by_line:[16,1,1,""],shares_to_shp:[16,1,1,""],three_level_aggregation_summary_to_shp:[16,1,1,""]},"quetzal.io.export_utils":{clean_seq:[17,1,1,""],create_line_load_b_a_graph:[17,1,1,""],save_line_load_graph:[17,1,1,""]},"quetzal.io.gtfs_importer":{BaseGtfsImporter:[18,2,1,""],linestring_geometry:[18,1,1,""],point_geometry:[18,1,1,""],to_seconds:[18,1,1,""]},"quetzal.io.gtfs_importer.BaseGtfsImporter":{build:[18,3,1,""],build_geometries:[18,3,1,""],build_links:[18,3,1,""],cast_columns_to_string:[18,3,1,""],merge_tables:[18,3,1,""],pick_trips:[18,3,1,""],read:[18,3,1,""],to_seconds:[18,3,1,""]},"quetzal.io.importer":{from_linedraft:[19,1,1,""],from_lines:[19,1,1,""],links_and_nodes:[19,1,1,""]},"quetzal.model":{analysismodel:[21,0,0,"-"],cubemodel:[22,0,0,"-"],docmodel:[23,0,0,"-"],integritymodel:[24,0,0,"-"],model:[25,0,0,"-"],preparationmodel:[26,0,0,"-"],stepmodel:[27,0,0,"-"],transportmodel:[28,0,0,"-"]},"quetzal.model.analysismodel":{AnalysisModel:[21,2,1,""],read_hdf:[21,1,1,""],read_json:[21,1,1,""]},"quetzal.model.analysismodel.AnalysisModel":{analysis_checkpoints:[21,3,1,""],analysis_desire:[21,3,1,""],analysis_linear_solver:[21,3,1,""],analysis_lines:[21,3,1,""],analysis_summary:[21,3,1,""]},"quetzal.model.cubemodel":{cubeModel:[22,2,1,""],head_string:[22,1,1,""],lin_string:[22,1,1,""],stop_and_node_string:[22,1,1,""]},"quetzal.model.cubemodel.cubeModel":{to_cube:[22,3,1,""],to_lin:[22,3,1,""],to_mat:[22,3,1,""],to_net:[22,3,1,""]},"quetzal.model.docmodel":{DocModel:[23,2,1,""],contain_pattern:[23,1,1,""],io_from_doc:[23,1,1,""]},"quetzal.model.docmodel.DocModel":{dot:[23,3,1,""],edges_from_method:[23,3,1,""],io_from_method:[23,3,1,""]},"quetzal.model.integritymodel":{IntegrityModel:[24,2,1,""],geodataframe_place_holder:[24,1,1,""],label_links:[24,1,1,""],list_duplicates:[24,1,1,""]},"quetzal.model.integritymodel.IntegrityModel":{integrity_fix_circular_lines:[24,3,1,""],integrity_fix_collision:[24,3,1,""],integrity_fix_nodeset_consistency:[24,3,1,""],integrity_fix_road_network:[24,3,1,""],integrity_fix_sequences:[24,3,1,""],integrity_test_all:[24,3,1,""],integrity_test_circular_lines:[24,3,1,""],integrity_test_collision:[24,3,1,""],integrity_test_dead_ends:[24,3,1,""],integrity_test_isolated_roads:[24,3,1,""],integrity_test_nodeset_consistency:[24,3,1,""],integrity_test_road_network:[24,3,1,""],integrity_test_sequences:[24,3,1,""],link_nodeset:[24,3,1,""],nodeset:[24,3,1,""],road_link_nodeset:[24,3,1,""],road_nodeset:[24,3,1,""]},"quetzal.model.model":{Model:[25,2,1,""],authorized_column:[25,1,1,""],log:[25,1,1,""],merge:[25,1,1,""],merge_links_and_nodes:[25,1,1,""],read_hdf:[25,1,1,""],track_args:[25,1,1,""]},"quetzal.model.model.Model":{change_epsg:[25,3,1,""],copy:[25,3,1,""],merge:[25,3,1,""],read_hdf:[25,3,1,""],read_json:[25,3,1,""],read_json_database:[25,3,1,""],to_hdf:[25,3,1,""],to_json:[25,3,1,""],to_json_database:[25,3,1,""]},"quetzal.model.preparationmodel":{PreparationModel:[26,2,1,""],read_hdf:[26,1,1,""],read_json:[26,1,1,""]},"quetzal.model.preparationmodel.PreparationModel":{preparation_cast_network:[26,3,1,""],preparation_clusterize_nodes:[26,3,1,""],preparation_clusterize_zones:[26,3,1,""],preparation_footpaths:[26,3,1,""],preparation_ntlegs:[26,3,1,""]},"quetzal.model.stepmodel":{StepModel:[27,2,1,""],deprecated_method:[27,1,1,""],read_hdf:[27,1,1,""],read_json:[27,1,1,""]},"quetzal.model.stepmodel.StepModel":{add_type_prefixes:[27,3,1,""],assert_convex_road_digraph:[27,3,1,""],assert_lines_integrity:[27,3,1,""],assert_no_circular_lines:[27,3,1,""],assert_no_collision:[27,3,1,""],assert_no_dead_ends:[27,3,1,""],assert_nodeset_consistency:[27,3,1,""],build_lines:[27,3,1,""],checkpoints:[27,3,1,""],clean_road_network:[27,3,1,""],get_lines_integrity:[27,3,1,""],get_no_circular_lines:[27,3,1,""],get_no_collision:[27,3,1,""],linear_solver:[27,3,1,""],renumber:[27,3,1,""],renumber_nodes:[27,3,1,""],step_analysis:[27,3,1,""],step_build_los:[27,3,1,""],step_cast_network:[27,3,1,""],step_desire:[27,3,1,""],step_footpaths:[27,3,1,""],step_modal_split:[27,3,1,""],step_ntlegs:[27,3,1,""],step_pathfinder:[27,3,1,""]},"quetzal.model.transportmodel":{TransportModel:[28,2,1,""],read_hdf:[28,1,1,""],read_json:[28,1,1,""]},"quetzal.model.transportmodel.TransportModel":{step_assignment:[28,3,1,""],step_build_los:[28,3,1,""],step_distribution:[28,3,1,""],step_evaluation:[28,3,1,""],step_modal_split:[28,3,1,""],step_pathfinder:[28,3,1,""],step_pt_pathfinder:[28,3,1,""],step_road_pathfinder:[28,3,1,""]},quetzal:{analysis:[3,0,0,"-"],engine:[7,0,0,"-"],io:[14,0,0,"-"],model:[20,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method"},terms:{"0x0000022f10c3cbf8":22,"\u00e9mission":11,"agr\u00e9gation":[21,27],"case":0,"class":[8,12,18,21,22,23,24,25,26,27,28],"conserv\u00e9":11,"d\u00e9cide":11,"d\u00e9sagr\u00e9gat":[21,27],"d\u00e9tail":[21,27],"default":10,"export":[2,10,14],"float":25,"form\u00e9":11,"function":[0,10,11,22],"import":[2,14,18],"int":[11,22,25,26,27,28],"lin\u00e9air":[11,21,27],"lin\u00e9aris":11,"m\u00e9thode":11,"m\u00eame":11,"mod\u00e8l":[21,27],"n\u0153ud":[21,27],"new":0,"param\u00e8tr":11,"pr\u00e9cedem":11,"pr\u00e9senc":[21,27],"probl\u00e8m":[11,21,27],"public":[0,10,15],"r\u00e9seau":[21,27],"r\u00e9solut":[21,27],"r\u00e9soud":11,"return":[10,11,19,25],"true":[0,8,10,12,15,16,17,19,22,24,25,26,27,28],_car:10,_left:25,_pt:10,_right:25,a_tot:11,a_ub:11,absolu:11,accegg:10,accept:0,acceptance:0,access:[0,10],accompani:0,accord:0,acknowledg:0,acquir:0,act:0,activ:0,actual:[26,27],adapt:0,add:10,add_network:[2,7],add_return:19,add_road_nod:8,add_type_prefix:27,addit:[0,10,11],address:0,afin:[21,27],after:0,against:0,agg:4,agg_pivot_stack_matrix:11,aggreg:[11,21,27],aggregat:10,aggregate_shar:10,aggregated_shar:[10,16,21,27],aggregation_summari:16,agre:0,ainsi:11,ajout:11,alight:[10,17,28],all:[0,10,16,21,22,25,27],all_pt_path:15,allow:[0,27,28],along:10,alor:11,alpha_c:10,alpha_car:[10,27,28],alter:0,amend:0,amic:0,analys:[21,27],analysi:[1,2],analysis_checkpoint:21,analysis_desir:21,analysis_lin:21,analysis_linear_solv:21,analysis_od_matrix:4,analysis_path:4,analysis_summari:21,analysis_tp_summari:4,analysismodel:[2,20],ange:0,ani:0,annex:0,any:0,api:[27,28],appli:[0,10],applic:0,arboresc:[21,27],arg:[15,16,21,25,26,27,28],aris:0,arrang:0,art:0,articl:0,artifici:10,assert_convex_road_digraph:27,assert_lines_integr:27,assert_no_circular_lin:27,assert_no_collis:27,assert_no_dead_end:27,assert_nodeset_consist:27,assign:[10,21,27],assigned_links_nodes_to_shp:[16,21,27],assigned_nodes_to_shp:16,assignment:28,assist:0,associ:[0,16],atomiqu:0,attach:0,attack:0,attent:0,attract:[10,11],attraction_share_pt:10,attribut:0,augment:10,authent:0,author:0,authorized_column:25,authorized_typ:25,automat:[0,10,28],automatiqu:0,aux:[21,27],avail:0,avec:11,b_ub:11,backward:17,backward_label:17,base:[0,8,10,12,18,21,22,23,24,25,26,27,28],basegtfsimport:18,basi:[0,10],basic:10,becom:0,been:0,behind:0,besid:0,best:0,beta_car:[10,27,28],between:[0,11],big_ind:11,binari:0,bind:0,board:[10,17,28],boarding_cost:[10,12],bonn:11,bool:[10,28],born:11,both:0,bound:11,bound_a_max:11,bound_a_min:11,bounds_a:[11,21,27],bounds_emiss:[11,21,27],bounds_tot_emiss:[11,21,27],breach:0,broad:0,broken_mod:12,broken_mode_graph:12,broken_rout:12,broken_route_graph:12,broken_sequ:[24,27],brought:0,build:[8,10,11,18,21,22,24,26,27,28],build_car_skim:[27,28],build_constraint:11,build_footpath:9,build_geometri:18,build_ind:11,build_lin:[16,27],build_link:18,build_mode_brak:12,build_mode_combin:12,build_nearest_neighbor:8,build_node_dict:8,build_od_stack:[27,28],build_road_access:8,build_road_datafram:8,build_route_brak:12,build_route_zon:12,builder:10,built:[10,21,27],busi:0,calcul:10,calibr:16,call:0,can:[10,17,24],cancel:0,capit:0,car_lo:[27,28],car_path:15,car_skim:10,carri:0,cast_columns_to_str:18,categori:16,caus:0,cea:0,cedex:0,centr:0,centroid:[4,10,16,26,27],centroid_and_link:9,certain:[21,27],cett:11,change_epsg:25,chaqu:[21,27],characterist:[0,10,28],charg:0,checkpoint:[21,27],checkpoint_demand:6,checkpoint_link:[21,27],checkpoint_nod:[21,27],checkpoints_how:10,chesnai:0,choos:0,chose:17,circular:[24,27],circular_lin:[24,27],circumst:0,claim:0,clean:[24,27],clean_road_network:27,clean_seq:17,clean_sequ:17,clear:25,cluster:[11,26,27,28],cluster_column:[26,27],cluster_seri:[11,16,26,27],cnrs:0,code:0,coeffici:11,coeur:11,coher:0,col:17,collect:[21,27],coller:[21,27],color:16,color_column:15,color_id:16,column:[10,11,18,21,25,27],com:1,come:0,comm:11,commenc:0,commerci:0,commissariat:0,commit:0,commun:0,compar:10,compat:0,compatibility:0,compens:0,compil:0,complet:[27,28],compli:0,complianc:0,complic:0,compon:0,compris:0,comput:[0,10,28],concern:0,condit:0,configur:0,conflict:0,conform:0,connect:[0,2,7],consequenti:0,consider:0,constitu:0,constitut:0,constrain:[10,11],constrained_link:[11,21,27],constraint:11,construct:[21,27],construir:[21,27],construit:11,contain:[0,10,25],contain_pattern:23,contraint:[11,21,27],contribut:0,contributions:0,contributor:0,coord:15,coordin:16,coordinates_unit:[8,9,10,24,25],copi:[0,10,25],copyright:0,correct:0,correspond:11,cost:[0,10],cost_benefit_analysi:[2,3],court:0,creat:[16,19],create_legend:16,create_line_load_b_a_graph:17,create_load_legend:16,creation:0,credit:0,credits:0,crow:10,cubemodel:[2,20],current:[0,27,28],curv:10,custom:0,custom_head:22,cut_buff:19,cutoff:[24,27],dai:0,damag:0,dan:[11,21,27],data:0,databas:25,datafram:[10,11,18,25,28],date:0,dead:[24,27],debug:[24,25],decid:0,decor:10,deem:0,defect:0,defens:0,defin:0,definitions:0,degre:[8,9,10],delai:0,delta:16,demand:10,deprec:27,deprecated_method:27,depth:0,deriv:0,describ:0,design:0,desir:[21,27],destin:[10,15],detect:0,determin:0,dev:16,develop:0,devient:11,dict:11,did:0,differ:10,dilig:0,direct:[0,13],directli:[0,17],disagr:0,disast:0,disclaim:0,discuss:0,displai:[0,2,14],disput:0,distanc:[10,11,28],distance_moyenn:11,distribut:[0,10,28],distribution:0,disturb:0,doc:23,docmodel:[2,20],document:0,doe:[0,24,27],domain:0,dot:23,doubli:10,download:0,draft:0,drawn:0,drop_dupl:12,drop_mod:12,due:0,duli:0,dumb_cast:[8,26,27],dump:[22,25],duplic:0,durat:[0,10],duration_car:10,duration_pt:10,dure:0,each:[0,10,17],earthquak:0,easili:0,econom:0,economic_seri:[4,21,27],edg:10,edges_from_method:23,effect:0,effective:0,effort:0,eggress:10,either:0,elect:0,electr:0,element:[0,11],elev:10,elle:11,emerg:0,emisison:11,emiss:[10,11],emission_share_pt:10,enabl:0,encod:18,encount:0,encourag:0,end:[10,24,27],end_nod:[26,27],endeavor:0,energi:0,enforc:0,engin:[1,2],english:0,ensur:0,entir:[0,11],entireti:0,entiti:0,entitl:0,entitlement:0,epsg:[16,24,25],equal:10,equip:0,error:[0,24],essenti:10,est:[11,21,27],establish:0,etape:[21,27],etc:0,euclidean:10,event:0,events:0,everi:10,everybodi:0,evid:0,exampl:[10,21,26,27,28],exce:0,exclus:0,excusable:0,execut:0,exercis:0,exist:0,experienc:0,explicit:0,exploit:0,explos:0,expon:[10,28],export_util:[2,14],express:0,expressli:0,external:0,extrapol:11,fact:0,factor:[26,27],fail:0,failur:0,faith:0,fals:[10,12,15,16,17,21,22,24,25,26,27,28],fault:0,fee:0,field:0,figsiz:17,figur:17,file:[0,16,22],filepath:[21,25,26,27,28],financi:0,find:[26,27],find_best_path:12,find_broken_mode_path:12,find_broken_route_path:12,find_node_path:8,fire:0,first:0,first_link:12,firstli:0,flexibl:1,fli:10,flow_column:13,folder:[21,22,25,26,27,28],follow:[0,10,17,25,28],fonction:11,font:17,fontsiz:17,footpath:[10,12,26,27,28],footpath_typ:22,foral:11,forc:0,forecast:1,forego:0,form:0,format:[0,16],forth:0,forward:17,forward_label:17,franc:0,freedom:0,freeli:0,french:0,frequenc:10,friction:[10,28],friction_matrix:10,from:[0,10,25,27,28],from_lin:19,from_linedraft:19,from_point:18,fulfil:0,full:[0,25],further:0,futur:0,gener:[0,27,28],geo:9,geo_join_method:9,geodatafram:[10,25],geodataframe_place_hold:24,geojson:25,geom_typ:24,geometri:10,georeferenc:16,get_lines_integr:27,get_no_circular_lin:27,get_no_collis:27,gis_path:[16,21,27],gis_resourc:16,github:1,gitstuff:16,give:0,given:[0,10,11,27,28],god:0,good:0,googl:[27,28],govern:0,governing:0,grant:0,granted:0,graph:[10,17],graph_from_links_and_ntleg:12,graph_link:10,graviti:[10,28],green:16,group:[8,11],group_id:[16,21,27],group_nam:15,gtfs_import:[2,14],gtfs_path:18,guid:0,have:0,hdf:25,hdf_databas:[21,26,28],head_str:22,header:23,herebi:0,herefrom:0,hereinabov:0,hereinaft:0,hereof:0,hereund:0,holder:0,how:25,howev:0,http:1,ibr:0,ici:11,idea:0,idem:11,ident:0,identifi:[0,24,27],ignor:24,iii:0,image_nam:17,immeubl:0,imped:10,impedance_matrix:[10,28],includ:[0,16],incorpor:0,incur:0,index:[1,10,19],indic:[0,11],indicatric:[21,27],indiqu:[21,27],indirectli:0,individu:0,industri:0,ineffect:0,inequ:11,informatiqu:0,infring:0,initial:0,inner:25,innov:0,inria:0,institut:0,instruct:0,instrument:0,integr:0,integrity_fix_circular_lin:24,integrity_fix_collis:24,integrity_fix_nodeset_consist:24,integrity_fix_road_network:24,integrity_fix_sequ:24,integrity_test_al:24,integrity_test_circular_lin:24,integrity_test_collis:24,integrity_test_dead_end:24,integrity_test_isolated_road:24,integrity_test_nodeset_consist:24,integrity_test_road_network:24,integrity_test_sequ:24,integritymodel:[2,20],intellectu:0,intellectual:0,intend:0,interest:0,interfac:0,internal:0,interpret:0,interrupt:0,intersection_flow:13,intervent:0,intrazon:[10,28],invalid:0,invok:0,io_from_doc:23,io_from_method:23,is_od_stack:[26,27],issu:0,iter:11,itinerari:[27,28],itself:0,join:1,join_link:25,join_nod:25,joint:0,json:25,json_databas:[21,25,26,28],json_fold:[21,26,28],jupyt:17,jurisdict:0,jurisdiction:0,keep_link_column:22,keep_node_column:22,keep_zone_column:22,kei:25,knowledg:0,known:10,kwarg:[8,9,12,13,15,16,21,22,25,26,27,28],label_link:24,labels:17,labor:0,lambda:10,language:0,last:10,last_link:12,law:0,least:0,leblanc:0,left:[11,25],left_link:25,left_nod:25,legal:0,legend:[16,17],legend_file_path:16,legend_typ:16,legisl:0,length:[4,8,26,27],letter:0,level:10,liabil:0,liability:0,liabl:0,licens:0,licenses:0,licensor:0,lien:[21,27],limit:0,lin_str:22,line:[0,4,8,10,16,17,19,21,24,26,27],line_column:[16,21,27],line_load:17,line_load_b_a:17,linear:16,linear_solv:[11,21,27],linearsolv:11,linearsolver_util:[2,7],linedraft:10,linersolver_util:[21,27],lines_to_shp:16,linestr:[16,19],linestring_geometri:18,link:[4,8,9,10,11,12,13,16,18,19,21,22,24,26,27,28],link_:[24,27],link_checkpoint:[6,10,21,27],link_nam:[16,21,27],link_nodeset:24,link_path:4,link_road_nod:8,links_and_nod:19,links_test:[21,27],linprog:11,linprog_kwarg:[21,27],list:[11,16,27,28],list_dupl:24,load:[0,10,16,17,25],load_bwd:17,load_column:16,load_fwd:17,loaded_link:[16,21,27,28],loaded_links_and_nod:[10,28],loaded_links_and_nodes_kwarg:[21,27,28],loaded_links_to_shp:16,loaded_nod:[16,28],loaded_road_link:28,log:25,logist:10,long_leg_spe:[10,26,27],longer:0,longlat:15,look:[24,26,27],loss:0,lower:[11,24,27],macro_neighborhood:[21,27],macro_zon:16,made:0,mai:0,main:0,mainten:0,majeur:0,make:0,mandatori:[21,26,27],manner:0,market:0,match:[21,27],matric:[21,27],matrix:[10,11,21,27,28],max:16,max_length:[9,26,27],max_ntleg_length:[26,27],max_valu:16,max_zon:[26,27],maximum:11,maxit:[11,21,27],mean:[0,11],mean_column:16,meant:10,measur:0,medium:0,meet:0,memorandum:0,mention:0,merg:[10,25],merge_links_and_nod:25,merge_on_link:8,merge_t:18,meso_macro_cluster_seri:16,meso_zon:16,meter:10,method:[16,25,27],michel:0,micro_meso_cluster_seri:16,micro_zon:16,min:11,min_a:11,minimum:0,miscellaneous:0,modal:10,modal_split:[27,28],modal_split_from_volumes_and_lo:10,modal_split_kwarg:[27,28],mode:10,mode_column:12,model:[1,2,10,11,12],modif:0,modifi:[0,21,27],modification:0,modified:0,modul:0,modules:0,month:0,more:0,moyenn:11,multimodal_graph:10,multipl:[10,11],multipli:[10,21,27],mztrice:[21,27],n_cluster:[9,26,27],n_neighbor:10,n_ntleg:[26,27],name:[0,10,16,23],nation:0,natur:0,nb_cluster:[21,27,28],nc_kwarg:[26,27],nearest:[10,26,27],nearest_geometry_kwarg:[8,13],nearest_method:[8,26,27],nearest_neighbor:8,necessari:0,need:22,neighborhood:[21,27],neither:0,network:[0,22,24,26,27],networkcast:8,nevertheless:0,ng_kwarg:[26,27],node:[4,8,9,10,16,18,19,21,24,26,27,28],node_:[24,27],node_checkpoint:[6,10,21,27],node_clust:9,node_index:19,node_index_to_int:22,node_join_datafram:8,node_nam:[16,21,27],node_path:[6,8],node_prefix:24,nodes_checkpoint:[21,26,27],nodes_nam:16,nodes_test:[21,27],nodeset:24,non:0,none:[8,9,10,12,15,16,17,18,21,22,23,24,25,26,27,28],nor:0,norm:11,notabl:0,notebook:17,notic:0,nouvel:11,nria:0,ntleg:[10,12,16,26,27],ntleg_spe:[10,26,27],ntleg_typ:22,ntlegs_centroids_to_shp:16,ntlegs_from_centroids_and_nod:10,number:[0,10,27,28],numer:10,nx_graph:12,object:[0,8,11,12,18,21,22,23,24,25,27],objectif:11,oblig:0,observ:[0,21,27],occas:0,occurr:0,od_matrix:4,od_stack:[4,6,10,11,21,27,28],od_volume_from_zon:10,od_volume_from_zones_kwarg:28,od_weighted_time_delta:5,offer:0,ogiciel:0,omitted_attribut:25,on_demand:[2,3],onc:[21,27],one:0,one_pt_path:15,onli:[0,24,27,28],only:0,open:0,oper:0,opportun:0,optim:[21,27],optimis:[11,21,27],option:0,oral:0,order:[0,10,21,27],organ:25,origin:[0,10,15],other:[0,25],otherwis:[27,28],out:0,outer_average_width:16,output:10,outsid:0,over:0,own:0,owner:0,pandasshp:16,par:[11,21,27],paragraph:0,paralysi:0,param:[10,11,16,21,27,28],paramet:[10,11,25,26,27,28],parenthood_geometri:9,pari:0,part:0,parti:0,partial:0,particular:0,pas_dist:[11,21,27],pass:24,patent:0,path:[4,6,10,12,15,16,26,27],path_analysis_od_matrix:4,path_and_duration_from_graph:12,path_and_duration_from_links_and_ntleg:10,path_column:10,path_finder_stack:10,path_or_buf:22,pathfind:[2,7,10],pattern:23,pd_json:25,pecuniari:0,penalti:[8,10,26,27],penalty_factor:[8,26,27],per:11,perform:[0,10,21,27],period:0,period_dur:4,period_length:4,perman:0,person:0,physic:0,pick_trip:18,pivot:[11,21,27],pivot_column:10,pivot_stack_matrix:[11,21,27],place:0,plan:1,plt:17,plu:[11,21,27],plural:0,png:17,point:[10,16],point_dict:18,point_geometri:18,pole_set:[10,12],ponant:0,possibl:0,pour:[21,27],power:[10,28],preambl:0,prefix:[9,24,27],preparation_cast_network:26,preparation_clusterize_nod:26,preparation_clusterize_zon:26,preparation_footpath:26,preparation_ntleg:26,preparationmodel:[2,20],presenc:0,prevail:0,previou:0,princip:0,principl:0,prior:0,privat:15,proceed:0,product:[0,10],profession:0,profit:0,program:0,projection_fil:16,properli:0,properti:0,property:0,protect:0,provid:[0,1,10,28],provis:0,provisions:0,proxim:10,pt_lo:[27,28],pt_path:[15,28],publicpathfind:12,publish:0,purpos:0,purpose:0,pursuant:0,python:1,qchasserieau:16,qml:16,que:11,qui:[21,27],rais:24,random:[27,28],rank:[10,24,27],rcparam:17,read:[0,18],read_hdf:[21,25,26,27,28],read_json:[21,25,26,27,28],read_json_databas:25,reason:0,recherch:0,recolor:19,recueilli:[21,27],recursive_depth:[24,27],redistribut:0,reduc:11,reduce_ind:11,refer:0,reference_od:5,regard:0,regress:10,reindex:25,relat:0,related:0,relev:0,remain:0,remot:0,remov:0,renumb:27,renumber_nod:27,replac:0,replace_geometri:8,replace_nod:[26,27],repres:0,represent:25,reproduc:0,reproduct:0,requir:[0,21,24,26,27,28],research:0,reserv:0,respect:0,respons:0,restrict:0,result:[0,21,27],revenir:[21,27],revers:12,reversed_nx_graph:12,right:[0,11,25],right_link:25,right_nod:25,rights:0,risk:0,road:[22,24,26,27,28],road_datafram:8,road_graph:8,road_link:[8,24,26,27,28],road_link_nodeset:24,road_network:[22,24,27],road_nod:[8,24,26,27],road_nodeset:24,road_path:28,rocquencourt:0,rout:12,route_column:12,route_id:[12,18],route_typ:[12,22],row:[6,9,13,15,18],rtype:10,rue:0,rule:0,run:[0,21,27],safe:0,said:0,same:[0,10],save_boardings_by_length_by_lin:16,save_boardings_by_lin:16,save_fig:17,save_line_headwai:16,save_line_length:16,save_line_load:16,save_line_load_graph:17,save_line_plot:16,save_line_transf:16,save_line_travel_tim:16,save_passenger_km_by_lin:16,scale:10,scenario_od:5,scientif:0,scientifiqu:0,scope:0,screen:13,screenlin:[2,7],search:10,second:10,secondli:0,secur:0,seek:0,select:6,self:[15,21,27],sent:0,separ:[0,22],seri:11,server:0,servic:[0,10],services:0,set:[0,10,21,24,27,28],set_emiss:19,shall:0,share:[4,10,21,27,28],shares_to_shp:16,short_leg_spe:[10,26,27],shortest:10,should:0,shp:[16,21,27],side:11,sign:0,signific:0,similarli:0,singl:[25,27,28],singular:0,size:[16,17],skim_matrix_kwarg:[27,28],softwar:0,sole:0,solut:0,sou:11,sourc:[0,4,5,6,8,9,10,11,12,13,15,16,17,18,19,21,22,23,24,25,26,27,28],space:[0,16],specif:0,specifi:[0,17],speed:[9,10,26,27],split:10,stack:10,staff:0,state:0,station:17,statu:0,step:[10,28],step_analysi:27,step_assign:28,step_build_lo:[27,28],step_cast_network:27,step_desir:27,step_distribut:28,step_evalu:28,step_footpath:27,step_modal_split:[27,28],step_ntleg:[26,27],step_pathfind:[27,28],step_pt_pathfind:28,step_road_pathfind:28,stepmodel:[2,18,20,25],stop:[18,26,27],stop_and_node_str:22,stop_id:18,storag:0,store:0,store_shp:[21,27],str:25,straight:10,strike:0,strong:0,studi:0,style:16,style_fil:16,subject:0,submit:0,submodul:2,subscrib:0,subsequ:0,success:0,suffer:0,suffix:[6,10,25],suitabl:0,suivant:11,sum:11,sum_column:16,supplement:0,supplementari:0,suppli:0,sur:[21,27],surfac:16,syspi:16,system:0,systra:0,systragroup:1,tacit:0,tacitli:0,take:0,technic:0,technolog:0,telecommun:0,temporari:0,term:0,termin:0,termination:0,test:0,text:[0,25],than:[0,24,27],thei:0,therefor:0,thereof:0,thi:[0,10],third:0,thirti:0,those:0,three_level_aggregation_summary_to_shp:16,threshold:[10,26,27],throughout:0,time:[0,4,10],time_scal:[10,27,28],time_str:18,titl:17,titles:17,to_cub:22,to_hdf:25,to_json:25,to_json_databas:25,to_lin:22,to_mat:22,to_net:22,to_point:18,to_second:18,to_shp_kwarg:[21,27],token:[27,28],toler:[11,21,27],tort:0,total:[0,11],toward:0,tp_summari:4,track_arg:25,trademark:0,traffic:1,transfer:[0,10,28],transfere:0,transit:[21,26,27],translat:0,transmiss:0,transmit:0,transport:[1,10,26,27],transportmodel:[2,20,21],tree:[21,27],trip_id:[8,15,16,18,21,22,27],trivial:10,tupl:[10,11],two:[0,16],type:[0,16,25],under:0,understand:0,understood:0,undertak:0,unless:0,unmodifi:0,unrest:0,unstak:28,updat:[0,11],upon:0,upper:11,use:[0,10],user:[0,16,17],utilis:11,utility_car:10,valeur:11,valid:[0,27,28],valu:[0,11,16,25],values_link:11,variabl:11,vector:11,verbos:[15,24],verifi:0,version:0,versions:0,vertex_set:4,viru:0,voluceau:0,volum:[6,10,11,21,26,27,28],volume_analysis_od_matrix:4,volume_column:[6,10,22,28],volume_pt:[10,22,28],voronoi_graph_and_tessel:9,waiver:0,walk_on_road:[24,25,27,28],walk_spe:[26,27],want:10,war:0,warrant:0,warranti:0,warranty:0,water:0,websit:0,weight:[8,10,16,26,27],well:0,were:0,whatsoev:0,when:0,where:0,whether:0,which:[0,28],who:0,whole:[0,11],whose:0,width:[16,17],within:0,without:0,word:0,work:[0,24,27],worldwid:0,wrapper:10,write:0,written:0,xtick:17,you:22,ytick:17,zone:[10,11,16,19,21,24,26,27,28],zone_:[24,27],zone_index_to_int:22,zone_to_road:[26,27,28],zone_to_transit:[26,27,28]},titles:["CeCILL-B FREE SOFTWARE LICENSE AGREEMENT","Quetzal Overview","quetzal package","quetzal.analysis package","quetzal.analysis.analysis module","quetzal.analysis.cost_benefit_analysis module","quetzal.analysis.on_demand module","quetzal.engine package","quetzal.engine.add_network module","quetzal.engine.connectivity module","quetzal.engine.engine module","quetzal.engine.linearsolver_utils module","quetzal.engine.pathfinder module","quetzal.engine.screenlines module","quetzal.io package","quetzal.io.display module","quetzal.io.export module","quetzal.io.export_utils module","quetzal.io.gtfs_importer module","quetzal.io.importer module","quetzal.model package","quetzal.model.analysismodel module","quetzal.model.cubemodel module","quetzal.model.docmodel module","quetzal.model.integritymodel module","quetzal.model.model module","quetzal.model.preparationmodel module","quetzal.model.stepmodel module","quetzal.model.transportmodel module"],titleterms:{"export":16,"import":19,add_network:8,agreement:0,analysi:[3,4,5,6],analysismodel:21,cecill:0,connect:9,content:[2,3,7,14,20],cost_benefit_analysi:5,cubemodel:22,displai:15,docmodel:23,engin:[7,8,9,10,11,12,13],export_util:17,free:[0,1],gtfs_import:18,indice:1,integritymodel:24,license:0,linearsolver_util:11,model:[20,21,22,23,24,25,26,27,28],modul:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],on_demand:6,overview:1,packag:[1,2,3,7,14,20],pathfind:12,preparationmodel:26,quetzal:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],screenlin:13,softwar:1,software:0,stepmodel:27,submodul:[3,7,14,20],subpackag:2,tabl:1,transportmodel:28}})