// Language Management
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'fr';
        this.translations = {
            fr: {
                // Header
                dashboard: 'Tableau de bord',
                settings: 'Paramètres',
                logout: 'Déconnexion',
                
                // Page Title
                pageTitle: 'Gestion des Commandes',
                
                // Stats
                newOrders: 'Nouvelles',
                processing: 'En cours',
                shipped: 'Expédiées',
                completed: 'Terminées',
                
                // Toolbar
                searchPlaceholder: 'Rechercher par nom, téléphone ou numéro de commande...',
                allStatuses: 'Tous les statuts',
                new: 'Nouveau',
                cancelled: 'Annulé',
                to: 'à',
                export: 'Exporter',
                addTestOrder: 'Commande test',
                
                // Table Headers
                id: 'id',
                nom: 'Nom',
                phone: 'Téléphone',
                wilaya: 'Wilaya',
                produit: 'produit',
                variants: 'Variantes',
                quantity: 'Qté',
                total: 'Total',
                date: 'Date',
                status: 'Statut',
                action: 'action',
                
                // Status Options
                statusNew: 'Nouveau',
                statusProcessing: 'En cours',
                statusPreparation: 'En préparation',
                statusShipped: 'Expédié',
                statusCompleted: 'Terminé',
                statusCancelled: 'Annulé',
                statusReturned: 'Retour',
                statusAwaitingExchange: 'En attente d\'échange',
                statusExchangeShipped: 'Échange expédié',
                statusExchangeCompleted: 'Échange terminé',
                statusRefundProcessing: 'Remboursement en cours',
                statusDisputeOpen: 'Litige ouvert',
                
                // Modal
                invoiceTitle: 'Facture de clients',
                produit: 'Produit',
                variantes: 'Variantes',
                quantite: 'Quantité',
                nom: 'Nom',
                telephone: 'Téléphone',
                wilaya: 'Wilaya',
                commune: 'Commune',
                prixProduit: 'Prix produit',
                fraisLivraison: 'Frais de livraison',
                total: 'Total',
                callClient: '📞 Appeler le client',
                memos: '📝 Mémos / Notes',
                noAnswer: '❌ N\'a pas répondu',
                called: '☎ Appelé avec succès',
                callLater: '⏳ Rappeler plus tard',
                deleteOrder: 'Supprimer',
                downloadImage: 'Image',
                downloadForm: 'Formulaire',
                
                // Actions
                details: 'Détails',
                
                // Messages
                orderCopied: 'Informations de la commande copiées !',
                noteAdded: 'Note ajoutée avec succès !',
                statusUpdated: 'Statut mis à jour !',
                testOrderAdded: 'Commande test ajoutée !',
                
                // WhatsApp Modal
                whatsappNotification: 'Notification WhatsApp',
                whatsappQuestion: 'Voulez-vous notifier le client via WhatsApp du changement de statut ?',
                sendWhatsApp: 'Envoyer WhatsApp',
                cancel: 'Annuler',
                
                // Delete confirmation
                confirmDelete: 'Confirmer la suppression',
                deleteWarning: 'Êtes-vous sûr de vouloir supprimer cette commande ? Cette action ne peut pas être annulée.',
                confirmDeleteBtn: 'Supprimer',
                
                // New Action Buttons
                orderDeleted: 'تم حذف الطلبية بنجاح',
                imageDownloaded: 'تم تحميل الصورة',
                formDownloaded: 'تم تحميل الاستمارة',
                
                // Bulk notifications
                bulkNotify: 'Informer les clients selon l\'état',
                selectStatusToNotify: 'Sélectionnez l\'état pour notifier les clients',
                selectStatus: 'Sélectionner l\'état',
                sendBulk: 'Envoyer les notifications',
                noOrdersFound: 'Aucune commande trouvée pour cet état',
                selectStatusFirst: 'Veuillez d\'abord sélectionner un état'
            },
            en: {
                // Header
                dashboard: 'Dashboard',
                settings: 'Settings',
                logout: 'Logout',
                
                // Page Title
                pageTitle: 'Orders Management',
                
                // Stats
                newOrders: 'New',
                processing: 'Processing',
                shipped: 'Shipped',
                completed: 'Completed',
                
                // Toolbar
                searchPlaceholder: 'Search by name, phone or order number...',
                allStatuses: 'All statuses',
                new: 'New',
                cancelled: 'Cancelled',
                to: 'to',
                export: 'Export',
                addTestOrder: 'Test order',
                
                // Table Headers
                id: 'id',
                nom: 'Name',
                phone: 'Phone',
                wilaya: 'Wilaya',
                produit: 'product',
                variants: 'Variants',
                quantity: 'Qty',
                total: 'Total',
                date: 'Date',
                status: 'Status',
                action: 'action',
                
                // Status Options
                statusNew: 'New',
                statusProcessing: 'In progress',
                statusPreparation: 'In preparation',
                statusShipped: 'Shipped',
                statusCompleted: 'Completed',
                statusCancelled: 'Cancelled',
                statusReturned: 'Returned',
                statusAwaitingExchange: 'Awaiting exchange',
                statusExchangeShipped: 'Exchange shipped',
                statusExchangeCompleted: 'Exchange completed',
                statusRefundProcessing: 'Refund in progress',
                statusDisputeOpen: 'Dispute opened',
                
                // Modal
                invoiceTitle: 'Invoice',
                produit: 'Product',
                Variantes: 'variable',   
                quantite: 'Quantity',
                nom: 'Name',
                telephone: 'Phone',
                wilaya: 'Wilaya',
                commune: 'City',
                prixProduit: 'Product price',
                fraisLivraison: 'Delivery fees',
                total: 'Total',
                callClient: '📞 Call client',
                memos: '📝 Memos / Notes',
                noAnswer: '❌ No answer',
                called: '☎ Called successfully',
                callLater: '⏳ Call back later',
                deleteOrder: 'Delete',
                downloadImage: 'Image',
                downloadForm: 'Form',
                
                // Actions
                details: 'Details',
                
                // Messages
                orderCopied: 'Order information copied!',
                noteAdded: 'Note added successfully!',
                statusUpdated: 'Status updated!',
                testOrderAdded: 'Test order added!',
                
                // WhatsApp Modal
                whatsappNotification: 'WhatsApp Notification',
                whatsappQuestion: 'Would you like to notify the customer via WhatsApp about the status change?',
                sendWhatsApp: 'Send WhatsApp',
                cancel: 'Cancel',
                
                // Delete confirmation
                confirmDelete: 'Confirm Delete',
                deleteWarning: 'Are you sure you want to delete this order? This action cannot be undone.',
                confirmDeleteBtn: 'Delete Order',
                
                // New Action Buttons
                orderDeleted: 'Order deleted successfully',
                imageDownloaded: 'Image downloaded',
                formDownloaded: 'Form downloaded',
                
                // Bulk notifications
                bulkNotify: 'Notify customers by status',
                selectStatusToNotify: 'Select status to notify customers',
                selectStatus: 'Select status',
                sendBulk: 'Send notifications',
                noOrdersFound: 'No orders found for this status',
                selectStatusFirst: 'Please select a status first'
            }
        };
        
        this.init();
    }
    
    init() {
        this.updateLanguageDisplay();
        this.translatePage();
        
        // Language toggle event
        document.getElementById('langToggle').addEventListener('click', () => {
            this.toggleLanguage();
        });
    }
    
    toggleLanguage() {
        this.currentLang = this.currentLang === 'fr' ? 'en' : 'fr';
        localStorage.setItem('language', this.currentLang);
        this.updateLanguageDisplay();
        this.translatePage();
        
        // Update table headers
        this.updateTableHeaders();
        
        // Update status dropdowns
        this.updateStatusDropdowns();
        
        // Update modal if open
        if (window.ordersManager && window.ordersManager.currentOrder) {
            window.ordersManager.populateModal(window.ordersManager.currentOrder);
        }
    }
    
    updateLanguageDisplay() {
        const langText = document.getElementById('langText');
        langText.textContent = this.currentLang === 'fr' ? 'Français' : 'English';
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (this.translations[this.currentLang][key]) {
                element.textContent = this.translations[this.currentLang][key];
            }
        });
        
        // Translate placeholders
        const placeholderElements = document.querySelectorAll('[data-key-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-key-placeholder');
            if (this.translations[this.currentLang][key]) {
                element.placeholder = this.translations[this.currentLang][key];
            }
        });
    }
    
    updateTableHeaders() {
        const headers = document.querySelectorAll('.orders-table th');
        const headerKeys = ['id', 'nom', 'phone', 'wilaya', 'produit', 'variants', 'quantity', 'total', 'status', 'date', 'action'];
        
        headers.forEach((header, index) => {
            if (headerKeys[index] && this.translations[this.currentLang][headerKeys[index]]) {
                header.textContent = this.translations[this.currentLang][headerKeys[index]];
            }
        });
    }
    
    updateStatusDropdowns() {
        // Update all status dropdown options
        document.querySelectorAll('.status-dropdown').forEach(select => {
            Array.from(select.options).forEach(option => {
                const key = option.getAttribute('data-key');
                if (key && this.translations[this.currentLang][key]) {
                    option.textContent = this.translations[this.currentLang][key];
                }
            });
        });
    }
    
    t(key) {
        return this.translations[this.currentLang][key] || key;
    }
}

// Orders Management System
class OrdersManager {
    constructor() {
        this.orders = this.loadOrders();
        this.filteredOrders = [...this.orders];
        this.currentOrder = null;
        
        this.init();
    }
    
    init() {
        this.renderOrders();
        this.updateStats();
        this.bindEvents();
        this.initModal();
        this.initDeleteModal();
    }
    
    loadOrders() {
        // Load from localStorage or return sample data
        const saved = localStorage.getItem('orders');
        if (saved) {
            return JSON.parse(saved);
        }
        
        return this.generateSampleOrders();
    }
    
    saveOrders() {
        localStorage.setItem('orders', JSON.stringify(this.orders));
    }
    
    generateSampleOrders() {
        const sampleOrders = [
            {
                id: '1',
                customerName: 'Marie',
                phone: '+33 6 12 34 56 78',
                wilaya: 'Paris',
                city: 'Paris',
                product: 'Collier Élégance',
                variants: 'Or rose, 45cm',
                quantity: 1,
                total: 89.99,
                customerNotes: 'Livraison rapide s\'il vous plaît',
                sellerNotes: '',
                date: new Date(Date.now() - 86400000).toISOString(),
                status: 'new',
                isRead: false
            },
            {
                id: '2',
                customerName: 'Jean',
                phone: '+33 6 98 76 54 32',
                wilaya: 'Rhône',
                city: 'Lyon',
                product: 'Bague Diamant',
                variants: 'Argent, Taille 56',
                quantity: 1,
                total: 159.99,
                customerNotes: '',
                sellerNotes: '☎ Appelé avec succès',
                date: new Date(Date.now() - 172800000).toISOString(),
                status: 'processing',
                isRead: true
            },
            {
                id: '3',
                customerName: 'Sophie',
                phone: '+33 6 11 22 33 44',
                wilaya: 'Bouches-du-Rhône',
                city: 'Marseille',
                product: 'Bracelet Charme',
                variants: 'Or blanc, 18cm',
                quantity: 2,
                total: 199.98,
                customerNotes: 'Cadeau d\'anniversaire',
                sellerNotes: '',
                date: new Date(Date.now() - 259200000).toISOString(),
                status: 'shipped',
                isRead: true
            }
        ];
        
        return sampleOrders;
    }
    
    bindEvents() {
        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.filterOrders();
        });
        
        // Status filter
        document.getElementById('statusFilter').addEventListener('change', () => {
            this.filterOrders();
        });
        
        // Date filters
        document.getElementById('dateFrom').addEventListener('change', () => {
            this.filterOrders();
        });
        
        document.getElementById('dateTo').addEventListener('change', () => {
            this.filterOrders();
        });
        
        // Add test order
        document.getElementById('addTestOrderBtn').addEventListener('click', () => {
            this.addTestOrder();
        });
        
        // Bulk notify button
        document.getElementById('bulkNotifyBtn').addEventListener('click', () => {
            this.bulkNotifyByStatus();
        });
        
        // Export functionality
        document.getElementById('exportBtn').addEventListener('click', () => {
            this.exportOrders();
        });
        
        // User menu toggle
        document.getElementById('menuToggle').addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = document.getElementById('dropdownMenu');
            dropdown.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            const dropdown = document.getElementById('dropdownMenu');
            dropdown.classList.remove('show');
        });
    }
    
    bulkNotifyByStatus() {
        const statusGroups = {};
        
        // Group orders by status
        this.orders.forEach(order => {
            if (!statusGroups[order.status]) {
                statusGroups[order.status] = [];
            }
            statusGroups[order.status].push(order);
        });
        
        // Create status selection modal
        const modalHTML = `
            <div class="modal-overlay show" id="bulkNotifyModal">
                <div class="whatsapp-modal">
                    <div class="modal-header">
                        <h3>
                            <i class="fab fa-whatsapp whatsapp-icon"></i>
                            <span>${window.langManager.t('bulkNotify')}</span>
                        </h3>
                        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p class="modal-text">${window.langManager.t('selectStatusToNotify')}</p>
                        <select id="bulkStatusSelect" class="filter-select" style="margin-bottom: 1rem; width: 100%;">
                            <option value="">${window.langManager.t('selectStatus')}</option>
                            <option value="new">${window.langManager.t('statusNew')}</option>
                            <option value="processing">${window.langManager.t('statusProcessing')}</option>
                            <option value="shipped">${window.langManager.t('statusShipped')}</option>
                            <option value="completed">${window.langManager.t('statusCompleted')}</option>
                            <option value="cancelled">${window.langManager.t('statusCancelled')}</option>
                        </select>
                        <div class="modal-actions">
                            <button class="btn btn-cancel" onclick="this.closest('.modal-overlay').remove()">
                                <i class="fas fa-times"></i>
                                <span>${window.langManager.t('cancel')}</span>
                            </button>
                            <button class="btn btn-whatsapp" onclick="ordersManager.sendBulkNotifications()">
                                <i class="fab fa-whatsapp"></i>
                                <span>${window.langManager.t('sendBulk')}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    sendBulkNotifications() {
        const status = document.getElementById('bulkStatusSelect').value;
        if (!status) {
            alert(window.langManager.t('selectStatusFirst'));
            return;
        }
        
        const ordersToNotify = this.orders.filter(order => order.status === status);
        if (ordersToNotify.length === 0) {
            alert(window.langManager.t('noOrdersFound'));
            return;
        }
        
        // Generate bulk message
        const message = this.generateBulkMessage(status, ordersToNotify);
        
        // Open WhatsApp with bulk message
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        // Close modal
        document.getElementById('bulkNotifyModal').remove();
    }
    
    generateBulkMessage(status, orders) {
        const statusMessages = {
            fr: {
                new: 'Vos commandes sont en cours de traitement.',
                processing: 'Vos commandes sont en cours de préparation.',
                shipped: 'Vos commandes ont été expédiées.',
                completed: 'Vos commandes ont été livrées avec succès.',
                cancelled: 'Vos commandes ont été annulées.'
            },
            en: {
                new: 'Your orders are being processed.',
                processing: 'Your orders are being prepared.',
                shipped: 'Your orders have been shipped.',
                completed: 'Your orders have been delivered successfully.',
                cancelled: 'Your orders have been cancelled.'
            }
        };
        
        const lang = window.langManager.currentLang;
        const message = statusMessages[lang][status] || statusMessages[lang]['new'];
        
        const orderNumbers = orders.map(order => `#${order.id}`).join(', ');
        const signature = lang === 'fr' ? 
            '\n\nCordialement,\nYouzinElegancia' :
            '\n\nBest regards,\nYouzinElegancia';
        
        return `${message}\n\nCommandes: ${orderNumbers}${signature}`;
    }
    
    filterOrders() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const statusFilter = document.getElementById('statusFilter').value;
        const dateFrom = document.getElementById('dateFrom').value;
        const dateTo = document.getElementById('dateTo').value;
        
        this.filteredOrders = this.orders.filter(order => {
            // Search filter
            const matchesSearch = !searchTerm || 
                order.customerName.toLowerCase().includes(searchTerm) ||
                order.phone.includes(searchTerm) ||
                order.id.toLowerCase().includes(searchTerm) ||
                order.product.toLowerCase().includes(searchTerm) ||
                order.wilaya.toLowerCase().includes(searchTerm) ||
                order.city.toLowerCase().includes(searchTerm);
            
            // Status filter
            const matchesStatus = !statusFilter || order.status === statusFilter;
            
            // Date filter
            const orderDate = new Date(order.date).toISOString().split('T')[0];
            const matchesDateFrom = !dateFrom || orderDate >= dateFrom;
            const matchesDateTo = !dateTo || orderDate <= dateTo;
            
            return matchesSearch && matchesStatus && matchesDateFrom && matchesDateTo;
        });
        
        this.renderOrders();
        
        // Add search result count
        this.updateSearchResults();
    }
    
    updateSearchResults() {
        const searchInput = document.getElementById('searchInput');
        const resultCount = this.filteredOrders.length;
        const totalCount = this.orders.length;
        
        // Update placeholder to show results
        if (searchInput.value.trim()) {
            searchInput.setAttribute('data-results', `${resultCount} résultat${resultCount > 1 ? 's' : ''}`);
        } else {
            searchInput.removeAttribute('data-results');
        }
    }
    
    getStatusClass(status) {
        const statusClasses = {
            'new': 'status-new',
            'processing': 'status-processing',
            'preparation': 'status-preparation',
            'shipped': 'status-shipped',
            'completed': 'status-completed',
            'cancelled': 'status-cancelled',
            'returned': 'status-returned',
            'awaiting_exchange': 'status-awaiting-exchange',
            'exchange_shipped': 'status-exchange-shipped',
            'exchange_completed': 'status-exchange-completed',
            'refund_processing': 'status-refund-processing',
            'dispute_open': 'status-dispute-open'
        };
        return statusClasses[status] || 'status-new';
    }
    
    createStatusDropdown(order) {
        const select = document.createElement('select');
        select.className = 'status-dropdown';
        select.setAttribute('data-order-id', order.id);
        
        const statuses = [
            { value: 'new', key: 'statusNew' },
            { value: 'processing', key: 'statusProcessing' },
            { value: 'preparation', key: 'statusPreparation' },
            { value: 'shipped', key: 'statusShipped' },
            { value: 'completed', key: 'statusCompleted' },
            { value: 'cancelled', key: 'statusCancelled' },
            { value: 'returned', key: 'statusReturned' },
            { value: 'awaiting_exchange', key: 'statusAwaitingExchange' },
            { value: 'exchange_shipped', key: 'statusExchangeShipped' },
            { value: 'exchange_completed', key: 'statusExchangeCompleted' },
            { value: 'refund_processing', key: 'statusRefundProcessing' },
            { value: 'dispute_open', key: 'statusDisputeOpen' }
        ];
        
        statuses.forEach(status => {
            const option = document.createElement('option');
            option.value = status.value;
            option.setAttribute('data-key', status.key);
            option.textContent = window.langManager.t(status.key);
            option.className = this.getStatusClass(status.value);
            if (order.status === status.value) {
                option.selected = true;
            }
            select.appendChild(option);
        });
        
        // Add change event listener
        select.addEventListener('change', (e) => {
            this.updateOrderStatus(order.id, e.target.value);
        });
        
        select.className += ` ${this.getStatusClass(order.status)}`;
        
        return select;
    }
    
    updateOrderStatus(orderId, newStatus) {
        const order = this.orders.find(o => o.id === orderId);
        if (!order) return;
        
        const oldStatus = order.status;
        order.status = newStatus;
        
        // Save to localStorage
        this.saveOrders();
        
        // Update stats
        this.updateStats();
        
        // Removed WhatsApp modal call
        
        // Show notification
        this.showNotification(window.langManager.t('statusUpdated'));
        
        // Re-render to update dropdown styling
        this.renderOrders();
    }
    
    renderOrders() {
        const tbody = document.getElementById('ordersTableBody');
        tbody.innerHTML = '';
        
        if (this.filteredOrders.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="11" style="text-align: center; padding: 2rem; color: var(--text-gray);">
                        ${window.langManager.t('noOrdersFound') || 'Aucune commande trouvée'}
                    </td>
                </tr>
            `;
            return;
        }
        
        this.filteredOrders.forEach((order, index) => {
            const row = document.createElement('tr');
            if (!order.isRead) {
                row.classList.add('unread');
            }
            
            // Extract first name only
            const firstName = order.customerName.split(' ')[0];
            
            const statusDropdown = this.createStatusDropdown(order);
            
            row.innerHTML = `
                <td class="col-id"><strong>${index + 1}</strong></td>
                <td class="col-nom truncate" title="${order.customerName}">${firstName}</td>
                <td class="col-phone">${order.phone}</td>
                <td class="col-wilaya truncate" title="${order.wilaya}, ${order.city}">${order.wilaya}</td>
                <td class="col-produit truncate" title="${order.product}">${order.product}</td>
                <td class="col-variants truncate" title="${order.variants}">${order.variants}</td>
                <td class="col-quantity">${order.quantity}</td>
                <td class="col-total">€${order.total.toFixed(2)}</td>
                <td class="col-status"></td>
                <td class="col-date">${this.formatDate(order.date)}</td>
                <td class="col-action">
                    <button class="action-btn" onclick="ordersManager.openOrderModal('${order.id}')">
                        <i class="fas fa-eye"></i>
                    </button>
                </td>
            `;
            
            // Add status dropdown to the status column
            row.querySelector('.col-status').appendChild(statusDropdown);
            
            // Add click event to row (except on dropdown and action button)
            row.addEventListener('click', (e) => {
                if (!e.target.closest('.action-btn') && !e.target.closest('.status-dropdown')) {
                    this.openOrderModal(order.id);
                }
            });
            
            tbody.appendChild(row);
        });
    }
    
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString(window.langManager.currentLang === 'fr' ? 'fr-FR' : 'en-US');
    }
    
    updateStats() {
        const stats = {
            new: this.orders.filter(o => o.status === 'new').length,
            processing: this.orders.filter(o => o.status === 'processing' || o.status === 'preparation').length,
            shipped: this.orders.filter(o => o.status === 'shipped' || o.status === 'exchange_shipped').length,
            completed: this.orders.filter(o => o.status === 'completed' || o.status === 'exchange_completed').length
        };
        
        document.getElementById('newOrdersCount').textContent = stats.new;
        document.getElementById('processingOrdersCount').textContent = stats.processing;
        document.getElementById('shippedOrdersCount').textContent = stats.shipped;
        document.getElementById('completedOrdersCount').textContent = stats.completed;
    }
    
    addTestOrder() {
        const testOrder = {
            id: String(this.orders.length + 1),
            customerName: 'Client Test Nom',
            phone: '+33 6 00 00 00 00',
            wilaya: 'Alger',
            city: 'Alger Centre',
            product: 'Produit Test',
            variants: 'Variante Test',
            quantity: 1,
            total: 99.99,
            customerNotes: 'Commande de test',
            sellerNotes: '',
            date: new Date().toISOString(),
            status: 'new',
            isRead: false
        };
        
        this.orders.unshift(testOrder);
        this.filteredOrders = [...this.orders];
        this.saveOrders();
        this.renderOrders();
        this.updateStats();
        
        this.showNotification(window.langManager.t('testOrderAdded'));
    }
    
    exportOrders() {
        const csvContent = this.generateCSV();
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', `orders_${new Date().toISOString().split('T')[0]}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
    
    generateCSV() {
        const headers = [
            'N°', 'Customer Name', 'Phone', 'Wilaya', 'City', 'Product', 
            'Variants', 'Quantity', 'Total', 'Status', 'Date', 'Customer Notes', 'Seller Notes'
        ];
        
        const rows = this.filteredOrders.map(order => [
            order.id,
            order.customerName,
            order.phone,
            order.wilaya,
            order.city,
            order.product,
            order.variants,
            order.quantity,
            order.total,
            order.status,
            this.formatDate(order.date),
            order.customerNotes,
            order.sellerNotes
        ]);
        
        return [headers, ...rows].map(row => 
            row.map(field => `"${String(field).replace(/"/g, '""')}"`).join(',')
        ).join('\n');
    }
    
    initModal() {
        const modal = document.getElementById('modalOverlay');
        const closeBtn = document.getElementById('modalClose');
        
        // Close modal events
        closeBtn.addEventListener('click', () => this.closeModal());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.closeModal();
        });
        
        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                this.closeModal();
            }
        });
        
        // Modal action buttons
        document.getElementById('callBtn').addEventListener('click', () => {
            this.callCustomer();
        });
        
        document.getElementById('addNotesBtn').addEventListener('click', () => {
            this.toggleNotesSection();
        });
        
        // Delete button - keep only this one
        document.getElementById('deleteOrderBtn').addEventListener('click', () => {
            this.showDeleteConfirmation();
        });
        
        // Quick notes buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-note-btn')) {
                const note = e.target.getAttribute('data-note');
                this.addQuickNote(note);
            }
        });
        
        // Auto-save seller notes
        document.getElementById('notesTextarea').addEventListener('input', 
            this.debounce(() => this.saveSellerNotes(), 1000)
        );
        
        // Delete confirmation modal
        this.initDeleteModal();
    }
    
    initDeleteModal() {
        const modal = document.getElementById('deleteModalOverlay');
        const closeBtn = document.getElementById('deleteModalClose');
        const cancelBtn = document.getElementById('deleteCancelBtn');
        const confirmBtn = document.getElementById('deleteConfirmBtn');
        
        // Close modal events
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeDeleteModal());
        }
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => this.closeDeleteModal());
        }
        if (confirmBtn) {
            confirmBtn.addEventListener('click', () => this.confirmDeleteOrder());
        }
        
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeDeleteModal();
            });
        }
        
        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
                this.closeDeleteModal();
            }
        });
    }
    
    confirmDeleteOrder() {
        if (!this.currentOrder) return;
        
        // Remove order from array
        this.orders = this.orders.filter(order => order.id !== this.currentOrder.id);
        this.filteredOrders = this.filteredOrders.filter(order => order.id !== this.currentOrder.id);
        
        // Save to localStorage
        this.saveOrders();
        
        // Update UI
        this.renderOrders();
        this.updateStats();
        
        // Close modals
        this.closeDeleteModal();
        this.closeModal();
        
        // Show notification
        this.showNotification(window.langManager.t('orderDeleted'));
    }
    
    openOrderModal(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if (!order) return;
        
        this.currentOrder = order;
        
        // Mark as read
        if (!order.isRead) {
            order.isRead = true;
            this.saveOrders();
            this.renderOrders();
        }
        
        this.populateModal(order);
        
        const modal = document.getElementById('modalOverlay');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    closeModal() {
        const modal = document.getElementById('modalOverlay');
        modal.classList.remove('show');
        document.body.style.overflow = '';
        this.currentOrder = null;
    }
    
    populateModal(order) {
        // Update field values
        document.getElementById('produitValue').textContent = order.product;
        document.getElementById('couleurValue').textContent = order.variants;
        document.getElementById('quantiteValue').textContent = order.quantity;
        document.getElementById('nomValue').textContent = order.customerName;
        document.getElementById('telephoneValue').textContent = order.phone;
        document.getElementById('wilayaValue').textContent = order.wilaya;
        document.getElementById('communeValue').textContent = order.city;
        
        // Calculate delivery fee (10% of product price)
        const productPrice = order.total * 0.9; // Assuming 90% is product, 10% is delivery
        const deliveryFee = order.total * 0.1;
        
        document.getElementById('prixProduitValue').textContent = `€${productPrice.toFixed(2)}`;
        document.getElementById('fraisLivraisonValue').textContent = `€${deliveryFee.toFixed(2)}`;
        document.getElementById('totalValue').textContent = `€${order.total.toFixed(2)}`;
        
        // Update notes
        document.getElementById('notesTextarea').value = order.sellerNotes || '';
    }
    
    callCustomer() {
        if (!this.currentOrder) return;
        
        const phoneNumber = this.currentOrder.phone.replace(/\s/g, '');
        window.open(`tel:${phoneNumber}`, '_self');
    }
    
    toggleNotesSection() {
        const notesSection = document.getElementById('notesSection');
        notesSection.classList.toggle('show');
    }
    
    addQuickNote(note) {
        const textarea = document.getElementById('notesTextarea');
        const currentNotes = textarea.value;
        const newNotes = currentNotes ? `${currentNotes}\n${note}` : note;
        
        textarea.value = newNotes;
        this.saveSellerNotes();
        this.showNotification(window.langManager.t('noteAdded'));
    }
    
    saveSellerNotes() {
        if (!this.currentOrder) return;
        
        const notes = document.getElementById('notesTextarea').value;
        this.currentOrder.sellerNotes = notes;
        this.saveOrders();
    }
    
    showDeleteConfirmation() {
        const modal = document.getElementById('deleteModalOverlay');
        if (modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    }
    
    closeDeleteModal() {
        const modal = document.getElementById('deleteModalOverlay');
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    }
    
    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--purple);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-lg);
            z-index: 3000;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Performance Optimization
class PerformanceOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        this.lazyLoadImages();
        this.optimizeScrolling();
        this.preloadCriticalResources();
    }
    
    lazyLoadImages() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
    
    optimizeScrolling() {
        let ticking = false;
        
        function updateScrollPosition() {
            // Add scroll-based optimizations here
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateScrollPosition);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestTick, { passive: true });
    }
    
    preloadCriticalResources() {
        // Preload critical CSS and fonts
        const criticalResources = [
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        ];
        
        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = 'style';
            document.head.appendChild(link);
        });
    }
}

// Accessibility Manager
class AccessibilityManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupKeyboardNavigation();
        this.setupScreenReaderSupport();
        this.setupFocusManagement();
    }
    
    setupKeyboardNavigation() {
        // Add keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K for search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                document.getElementById('searchInput').focus();
            }
            
            // Escape to close modals
            if (e.key === 'Escape') {
                const modal = document.getElementById('modalOverlay');
                if (modal.classList.contains('show')) {
                    window.ordersManager.closeModal();
                }
                
                const bulkModal = document.getElementById('bulkNotifyModal');
                if (bulkModal) {
                    bulkModal.remove();
                }
            }
        });
    }
    
    setupScreenReaderSupport() {
        // Add ARIA labels and descriptions
        document.querySelectorAll('button, input, select').forEach(element => {
            if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
                const text = element.textContent || element.placeholder || element.value;
                if (text) {
                    element.setAttribute('aria-label', text);
                }
            }
        });
    }
    
    setupFocusManagement() {
        // Trap focus in modals
        const modal = document.getElementById('modalOverlay');
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        
        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const focusableContent = modal.querySelectorAll(focusableElements);
                const firstFocusableElement = focusableContent[0];
                const lastFocusableElement = focusableContent[focusableContent.length - 1];
                
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize managers
    window.langManager = new LanguageManager();
    window.ordersManager = new OrdersManager();
    window.performanceOptimizer = new PerformanceOptimizer();
    window.accessibilityManager = new AccessibilityManager();
    
    // Add loading states
    document.body.classList.add('loaded');
    
    // Initialize table headers translation
    window.langManager.updateTableHeaders();
    
    // Show scroll hint on mobile
    const scrollHint = document.getElementById('scrollHint');
    if (scrollHint && window.innerWidth <= 768) {
        scrollHint.classList.add('show');
        
        // Hide after 4 seconds or on scroll
        const hideHint = () => {
            scrollHint.classList.remove('show');
        };
        
        setTimeout(hideHint, 4000);
        
        const tableContainer = document.querySelector('.table-container');
        tableContainer.addEventListener('scroll', hideHint, { once: true });
    }
    
    // Service Worker registration for PWA capabilities
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(err => {
            console.log('Service Worker registration failed:', err);
        });
    }
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
    // You could send this to an error reporting service
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // You could send this to an error reporting service
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LanguageManager,
        OrdersManager,
        PerformanceOptimizer,
        AccessibilityManager
    };
}